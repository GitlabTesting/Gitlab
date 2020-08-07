// const {Builder, By, Key, util} = require("selenium-webdriver");
// const chrome = require('selenium-webdriver/chrome');
// const firefox = require('selenium-webdriver/firefox');

var webdriver = require('selenium-webdriver');

// Open Chrome Browser
var driver = new webdriver.Builder().forBrowser('chrome').build();
// var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// Open google.com
driver.get('http://www.google.com');