import axios from 'axios';

export default async (req, res) => {
    const config = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJg_JHs9OvthIRW6cRDRHcDWE&sensor=true&key=AIzaSyCQ7GVa2SUwnNXW9Pep_oR2w_cVmleEeqM&language=fr&fields=reviews`,
        headers: {}
    };

    const { data } = await axios(config);

    res.json({ reviews: data.result.reviews });
};
