export default class {
    constructor($http) {
        this.$http = $http;
    }

    getComments() {
        return this.$http.get('http://localhost\:3000/api/comments')
            .then(res => res.data);
    }
};
