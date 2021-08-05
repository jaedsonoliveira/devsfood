let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    //GET api/categories
    getCategories: async () => {
        const res = await fetch(BASE + '/categories');
        const json = await res.json();
        return json;
    },
    //pega os produtos
    getProducts:async (category,page,search) => {

        let fields = {};
        if(category !== 0){
            fields.category = category;
        }
        if(page > 0) {
            fields.page = page;
        }
        if(search != ''){
            fields.search = search;
        }
        
        let queryString = new URLSearchParams(fields).toString();

        const res = await fetch(BASE + '/products?'+queryString);
        const json = await res.json();
        return json;
    }
}