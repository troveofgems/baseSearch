import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './style/Listings.css';
const Listings = ({ scrollToRef }) => {
  const
    [initialData, setInitialData] = useState([]), // Set Results Of The API Call Here
    [filteredData, setFilteredData] = useState(null),
    [filterResultCount, setFilterResultCount] = useState(null),

    [textFilter, setTextFilter] = useState(""),
    [propertyTypeFilter, setPropertyTypeFilter] = useState(null),
    [baseTypeFilter, setBaseTypeFilter] = useState(null),
    [bedroomCountFilter, setBedroomCountFilter] = useState(null),
    [priceFilter, setPriceFilter] = useState(3),


    [visibleLevel, setVisibleLevel] = useState(0),
    [visibleData, setVisibleData] = useState([]);


  useEffect(() => {
    const makeCallToBackend = async () => {
      let data = await axios.get('/api/v1/listings');
      return data.data;
    };
    makeCallToBackend(setInitialData).then(data => {
      console.log("Data is: ", data);
      setInitialData(data.data);
      setTextFilter("");
    }).catch(err => console.error(err));
  }, []); // On Component Load

  useEffect(() => {
    let datasetToUse = !filteredData ? initialData : filteredData;
    feedSetVisibleData(visibleLevel, datasetToUse);
  }, [visibleLevel]); // On Btn Press To View More

  useEffect(() => {
    let noFiltersAreSet =
      (textFilter === "") &&
      !propertyTypeFilter && !baseTypeFilter && !bedroomCountFilter &&
      priceFilter === 3;

    if (noFiltersAreSet) {
      resetToBaseView();
    } else {
      let newFilter = applyFilters(initialData, textFilter, propertyTypeFilter, baseTypeFilter, bedroomCountFilter, priceFilter);
      setFilterResultCount(newFilter.length);
      feedSetVisibleData(visibleLevel, newFilter);
    }
  }, [textFilter, propertyTypeFilter, baseTypeFilter, bedroomCountFilter, priceFilter, initialData]);

  const applyFilters = (initialDataset, textFilter, propertyTypeFilter, baseTypeFilter, bedroomCountFilter, priceFilter) => {
    let filteredData = initialDataset;
    // Apply Text Filter
    filteredData = (textFilter === "" || textFilter === null) ?
      filteredData : filterDatasetByQueryString(textFilter, filteredData);
    // Apply Property Type Filter
    filteredData = (propertyTypeFilter === "" || propertyTypeFilter === null) ?
      filteredData : filterDatasetByPropertyType(propertyTypeFilter, filteredData);
    // Apply Base Type Filter
    filteredData = (baseTypeFilter === "" || baseTypeFilter === null) ?
      filteredData : filterDatasetByBaseType(baseTypeFilter, filteredData);
    // Apply Bedroom Filter
    filteredData = (bedroomCountFilter === null || parseInt(bedroomCountFilter) < 1) ?
      filteredData : filterDatasetByBedroomCount(bedroomCountFilter, filteredData);
    // Apply Price Filter
    filteredData = (priceFilter === null || priceFilter === 3) ?
      filteredData : filterDatasetByPrice(priceFilter, filteredData);
    setVisibleLevel(3);
    return filteredData;
  };

  const filterDatasetByQueryString = (qryStr = "", dataset = []) =>
    dataset.filter(
      listing =>
        listing.name.toLowerCase().includes(qryStr.toLowerCase()) ||
        listing.nearest_base_installation.toLowerCase().includes(qryStr.toLowerCase())
    );

  const filterDatasetByPropertyType = (qryStr = "", dataset = []) =>
    dataset.filter(
      listing =>
        listing.property_type.toLowerCase().includes(qryStr.toLowerCase())
    );

  const filterDatasetByBaseType = (qryStr = "", dataset = []) =>
    dataset.filter(
      listing =>
        listing.nearest_base_installation_type.toLowerCase().includes(qryStr.toLowerCase())
    );

  const filterDatasetByBedroomCount = (qryStr = "", dataset = []) => {
    console.log('Filter By Bedroom, ', qryStr);
    let parsedNumber = parseInt(qryStr);
    if (parsedNumber > 1 && parsedNumber !== 9) {
      return dataset.filter(listing => parseInt(listing.bedrooms) >= parsedNumber);
    } else if (parsedNumber === 9) {
      return dataset.filter(listing => parseInt(listing.bedrooms) === 1);
    }
    return dataset.filter(listing => parseInt(listing.bedrooms) >= 1);
  }
  const filterDatasetByPrice = (qryStr = 0, dataset = []) => {
    return dataset.filter(listing => (qryStr >= parseInt(listing.price)));
  };


  const resetToBaseView = () => {
    setVisibleLevel(0);
    setFilterResultCount(null);
    //setFilteredData(null);
    feedSetVisibleData(visibleLevel, initialData);
  };
  const feedSetVisibleData = (level = 0, dataset = []) => {
    if (dataset === null) { return; }
    switch (level) {
      case 0:
        if (dataset) {
          setVisibleData(setListings(dataset.slice(0, 6)));
        }
        break;
      case 1:
        if (dataset) {
          setVisibleData(setListings(dataset.slice(0, 9)));
        }
        break;
      case 2:
        if (dataset) {
          setVisibleData(setListings(dataset.slice(0, 12)));
        }
        break;
      case 3:
        setVisibleData(setListings(dataset));
        break;
      default:
        break;
    }
  }
  const buildCard = cardData => {
    const {
      name, property_type, summary, nearest_base_installation, nearest_base_installation_type, bedrooms, price,
      maskId
    } = cardData;

    let card = {
      cardTitle: (name.charAt(0).toUpperCase() + name.substring(1)),
      cardType: property_type.charAt(0).toUpperCase() + property_type.substring(1),
      cardSummary: summary.length > 100 ? `${summary.substring(0, 75)}...` : summary,
      installationType: nearest_base_installation_type.charAt(0).toUpperCase() + nearest_base_installation_type.substring(1),
      installationDetail: nearest_base_installation,
      cardPrice: price,
      bedCount: bedrooms
    };

    const {
      cardTitle, cardType, cardSummary, installationType, installationDetail, cardPrice, bedCount,
    } = card;

    const {
      image_source
    } = cardData.images[0];

    return (
      <div className="listing-card">
        <img alt="Single Room" src={image_source || "img/single-room.jpeg"} className="listing-img" />
        <div className="listing-card-content">
          <h4 className="listing-card-heading">{cardTitle}</h4>
          <h6 className="listing-card-paragraph" style={{margin: ".25rem 0", fontSize: "1.25rem"}}>
            {cardType}
          </h6>
          <table style={{marginTop: ".75rem", width: "100%"}}>
            <thead>
            <tr>
              <th>Nearest Base</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{installationDetail}</td>
            </tr>
            </tbody>
          </table>
          <table style={{marginTop: ".75rem", width: "100%", display: "flex"}}>
            <thead>
            <tr>
              <th>Base Type:{' '}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{' '}{installationType}</td>
            </tr>
            </tbody>
          </table>
          <p className="listing-card-paragraph" style={{fontSize: "1.25rem"}}>
            {cardSummary}
          </p>
          <div style={{display: "flex", justifyContent: "space-around", marginBottom: "1rem"}}>
                <span>
                  <i className="fas fa-bed" /> {bedCount} bed{(bedCount > 1 || bedCount === 0) ? 's' : false}
                </span>
            <span>
                  <i className="fas fa-shower" /> 1 bathroom
                </span>
          </div>
          <p className="listing-price">${cardPrice} / night</p>
          <div style={{textAlign: "center"}}>
            <button className="listing-card-btn" onClick={() => {alert(`Let's get you started on booking your stay at the ${cardTitle}...`)}}>
              Book Now!
            </button>
            <button className="listing-card-btn" onClick={() => {
              alert('Please Check The Console')
              console.log("The data for the processed request will include: ", cardData);
            }}>
              More Details
            </button>
          </div>
        </div>
      </div>
    );
  };
  const setListings = data => {
    let totalListings = [];
    for(let i = 0; i < data.length; i += 1) {
      const
        dataToParse = data[i],
        jsxFragment = buildCard(dataToParse);

      totalListings.push(jsxFragment);
    }

    return (
      <div className="listing-card-wrapper">
        {totalListings.length === 0 && (
          <h2>No Data Available</h2>
        )}
        {totalListings.length > 0 && (
          <>
            {totalListings}
          </>
        )}
      </div>
    );
  };
  const handleRequestToViewMoreListings = () => {
    if (visibleLevel < 3) {
      setVisibleLevel(visibleLevel + 1);
    }
  }

  return (
    <section id="listings" className="listings" ref={scrollToRef}>
      <div className="common-section-header">
        <h2 className="common-section-heading" style={{marginBottom: "1rem"}}>BaseSearch Listings</h2>
        <div className="underline">
          <div className="small-underline">{''}</div>
          <div className="big-underline">{''}</div>
        </div>
        <div className={"searchControlForms"} style={{marginTop: "3rem"}}>
          <form className="d-flex search-site-form">
            <div className="listing-search">
              <input
                className="form-control me-2 listing-search-input" type="search"
                placeholder="Search" aria-label="Search"
                onChange={evt => setTextFilter(evt.target.value)}
              />
            </div>
          </form>
          <h4>Filters</h4>
          <form className="d-flex filter-results-form"
                style={{justifyContent: "space-around", width: "75%", margin: "1.25rem auto 0 auto"}}
          >
            <div className={"filterByPropertyType"}>
              <label htmlFor="property_type">Property Type</label>
              <select
                name="property_type" id="property_type"
                className="form-control me-2" onChange={evt => setPropertyTypeFilter(evt.target.value)}
              >
                <option value="">No Selection</option>
                <option value="house">House</option>
                <option value="guesthouse">Guest House</option>
                <option value="apartment">Apartment</option>
                <option value="cottage">Cottage</option>
                <option value="cabin">Cabin</option>
                <option value="hostel">Hostel</option>
              </select>
            </div>
            <div className={"filterByNearestBaseType"}>
              <label htmlFor="property_type">Base Type</label>
              <select
                name="property_type" id="property_type" className="form-control me-2"
                onChange={evt => setBaseTypeFilter(evt.target.value)}
              >
                <option value="">No Selection</option>
                <option value="airforce">Air Force</option>
                <option value="army">Army</option>
                <option value="coastguard">Coast Guard</option>
                <option value="marinecorps">Marine Corps</option>
                <option value="navy">Navy</option>
              </select>
            </div>
            <div>
              <label htmlFor="property_type">Bedrooms</label>
              <div style={{display: "flex", flexDirection: "column", textAlign: "left"}}>
                <label htmlFor="bedroomCountChoice">
                  <input type="radio" id="bedroomCountChoice"
                         name="bedroomCount" value="9"
                         onChange={evt => setBedroomCountFilter(evt.target.value)}
                  />{' '}
                  Single Bedroom Only
                </label>
                <label htmlFor="bedroomCountChoice">
                  <input type="radio" id="bedroomCountChoice"
                         name="bedroomCount" value="1"
                         onChange={evt => setBedroomCountFilter(evt.target.value)}
                  />{' '}
                  1+
                </label>
                <label htmlFor="bedroomCountChoice">
                  <input type="radio" id="bedroomCountChoice"
                         name="bedroomCount" value="2"
                         onChange={evt => setBedroomCountFilter(evt.target.value)}
                  />{' '}
                  2+
                </label>

                <label htmlFor="bedroomCountChoice">
                  <input type="radio" id="bedroomCountChoice"
                         name="bedroomCount" value="5"
                         onChange={evt => setBedroomCountFilter(evt.target.value)}
                  />{' '}
                  5+
                </label>
              </div>
            </div>
            <div>
              <label>Price Under Or Near</label>
              <div>
                <input
                  type="range" min="3" max="30" className="slider" id="myRange" value={priceFilter || 3}
                  onChange={evt => setPriceFilter(parseInt(evt.target.value))}
                />
              </div>
              <span>${priceFilter !== 3 ? priceFilter : "-"}</span>
            </div>
          </form>
        </div>
      </div>
      {visibleData}
      <div className="listing-btn-wrapper">
        <button className="listing-btn" onClick={() => handleRequestToViewMoreListings()} disabled={visibleLevel >= 3 || filterResultCount !== null}>
          {
            filteredData === null &&
            filterResultCount === null &&
            visibleLevel >= 3 &&
            "No More Listings To Show" + ` (${(visibleLevel === 0 ? 6 : (visibleLevel + 2) * 3)}) `
          }
          {
            filteredData === null &&
            filterResultCount === null &&
            visibleLevel < 3 &&
            "View More Listings" + ` (${(visibleLevel === 0 ? 6 : (visibleLevel + 2) * 3)}) `
          }
          {
            filterResultCount !== null &&
            "Filtered Results" + ` (${filterResultCount}) `
          }
        </button>
      </div>
    </section>
  );
};

export default Listings;