class Search{
    constructor(entity, term, country, explicit, limit){
        this.entity = entity;
        this.term= term;
        this.country= country;
        this.explicit= explicit;
        this.limit= limit;
    }
    getEntity(){
        return this.entity;
    }
    getTerm(){
        return this.term;
    }
    getCountry(){
        return this.country;
    }
    getExplicit(){
        return this.explicit;
    }
    getLimit(){
        return this.limit;
    }
}