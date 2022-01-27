// const { Blog, Comments } = require("../../../../models/Blog")


const renderLoginPage = (req, res) => { 
    res.render("login");
}

const rendersignUpPage = (req, res) => {
    res.render("signUp");
}

const renderHomePage = (req, res) => { 
    res.render("homepage");
}

module.exports = {
    renderLoginPage,
    rendersignUpPage,
    renderHomePage
}