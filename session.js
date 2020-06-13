// Really just an abstraction of sessionStorage.setItem, it'll come in handy 
function storeData(storageKey, myValueToStore) {
    sessionStorage.setItem(storageKey, myValueToStore);
}

// Really just an abstraction of sessionStorage.getItem, it'll come in handy
function getData(storageKey) {
        sessionStorage.getItem(storageKey);
}

module.exports = {
    storeData: storeData,
    getData: getData,
  };