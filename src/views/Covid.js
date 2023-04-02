import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";

const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {

        (async () => {
            try {
                let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z');
                let data = res && res.data ? res.data : [];
                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    });
                    data = data.reverse();
                }
                setDataCovid(data);
                setLoading(false);
                setIsError(false);
            } catch (e) {
                setLoading(false);
                setIsError(true);
            }
        })();

    }, []);
    return (

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
    );
};

export default Covid;