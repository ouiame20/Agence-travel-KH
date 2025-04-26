import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>Explore the World With Us </h1>
      <p>From bustling cities to hidden paradises, your next adventure starts here!</p>

      <div className="destinations">
        <div className="destination">
          <img 
            src="https://t3.ftcdn.net/jpg/00/52/67/50/360_F_52675042_eVXTMyX0w45rjc2mVdyyg1h7lLr1nhLI.jpg" 
          />
          <h2>New York </h2>
          <p>The city that never sleeps, full of lights, life, and endless opportunities.</p>
          <button>Discover</button>
        </div>

        <div className="destination">
          <img 
            src="https://cdn.britannica.com/49/179449-138-9F4EC401/Overview-Berlin.jpg?w=800&h=450&c=crop"  
          />
          <h2>Berlin </h2>
          <p>A vibrant city rich with history, art, and unforgettable nightlife.</p>
          <button>Discover</button>
        </div>

  
        <div className="destination">
          <img 
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090" 
          />
          <h2>Tokyo</h2>
          <p>the perfect blend of tradition and innovation in Japan's.</p>
          <button>Discover</button>
        </div>

      
        <div className="destination">
          <img 
            src="https://lp-cms-production.imgix.net/2019-06/dc6c6aa1c80bd52f90decf31c6fb8f97-koutoubia-mosque.jpg?fit=crop&ar=1:1&w=1200&auto=format&q=75" 
          />
          <h2>Marrakech</h2>
          <p>Get lost in the colorful souks and enjoy the magic of Morocco’s Red City.</p>
          <button>Discover</button>
        </div>

      </div>
    </div>
  );
};

export default Home;
