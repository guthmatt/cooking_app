"use strict";

var courses = [
    {
        title: "Chocolate Cake",
        cost:   50
    },
    {
        title: "Artichoke Dip",
        cost:   20
    },
    {
        title: "Chicken Enchiladas",
        cost:   25
    }
];


exports.showCourses = (req, res) => {
    res.render("courses", {
        offeredCourses: courses
    });
};

exports.showSignUp = (req, res) => {
    res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};