import React, { Component } from 'react';
// import ProductDetails from './../dashboard/productDetails';
import { connect } from 'react-redux';
import './admin.css';
// import { getProducts } from '../../redux/actions';
import axios from 'axios'
import NavBar from './navbar'


class GetCountry extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/country/`)
        .then(res =>
        this.setState({
            data: res.data
        }))
    }

    render() {
        return (
            <div>
            <NavBar/>
            <div className = 'container is-fluid'>
            <div className="AdminProducts">
                <table id="productDescription" border="1" className="table is-hoverable is-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.values(this.state.data).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        {/* <td>{this.props.products.countries}</td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // country: state.country,
    country: state.country
})

export default connect(mapStateToProps, null)(GetCountry)