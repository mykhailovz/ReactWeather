var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application build on React. I have built 
                this for The Complete Web App Developer Course.
            </p>
            <p>
                Here some of the tools I used:
            </p>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework(library) used
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map 
                    to search for weather data by city name
                </li>
        </div>
    );
};



module.exports = About;