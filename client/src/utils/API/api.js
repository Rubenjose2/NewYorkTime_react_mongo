import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "api-key=6120d76188fb4637bb531568bb33a00d";

export default {
    search: function(query) {
        return axios.get(BASEURL + APIKEY + "&q=" + query);
    }
}