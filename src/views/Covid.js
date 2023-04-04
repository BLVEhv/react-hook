import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";

const Covid = () => {
    let [name, setName] = useState('BLUE');
    const { data: dataCovid, loading, isError } = useFetch(`https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z`, true);

    return (
        <>
            <h1>
                Hello world from {name}
            </h1>
            <h2>Covid tracking in VietNam</h2>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Country</th>
                        <th>Active</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false && loading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (

                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Country}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Deaths}</td>
                                </tr>
                            );
                        })}
                    {loading === true &&
                        <tr>
                            <td colSpan={5} style={{ textAlign: "center" }}>Loading...</td>
                        </tr>}
                    {isError === true &&
                        <tr>
                            <td colSpan={5} style={{ textAlign: "center" }}>Something wrong...</td>
                        </tr>}
                </tbody>



            </table>
        </>
    );
};

export default Covid;