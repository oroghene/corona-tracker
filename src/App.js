import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import { Button } from '@material-ui/core';
import styles from './App.module.css';

import image from './images/covid-19.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <h1 style={{textAlign: "center"}}>COVID-19 STATISTICS</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Button variant="text" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" target="_blank" rel="noopener noreferrer" style={{textAlign: "center"}}>Click here to get the latest information from the CDC about Covid-19</Button>
      </div>
    );
  }
}

export default App;