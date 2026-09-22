// Define the function openMapsApp that will open the map app or fallback URL depending on device
function openMapsApp() {
  // This is the fallback URL (Google Maps business profile link) for browsers or unsupported devices
  const businessProfileURL = "https://maps.app.goo.gl/rvgBs4o7X2BWmwfaA";

  // Check if the user agent string contains "Android" (case-insensitive)
  if (/Android/i.test(navigator.userAgent)) {
    // For Android devices, attempt to open the native map app using geo URI scheme with query address
    window.location.href = `geo:0,0?q=10055+Sweet+Valley+Dr+Valley+View+OH`;

    // After 1 second, open the fallback business profile in a new tab/window
    // This is a backup in case the geo URI doesn't work or is ignored by the device
    setTimeout(() => {
      window.open(businessProfileURL, '_blank', 'noopener');
    }, 1000);

  // Check if the user agent string matches iOS devices (iPhone, iPad, iPod)
  } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // For iOS devices, open Apple Maps using the maps URI scheme with the address
    window.location.href = `maps://maps.apple.com/?address=10055+Sweet+Valley+Dr,+Valley+View,+OH`;

  } else {
    // For other platforms (desktop, unsupported devices, etc.), open the fallback business profile URL in a new tab/window
    window.open(businessProfileURL, '_blank', 'noopener');
  }
}

// Wait until the DOM content is fully loaded before running this code
document.addEventListener('DOMContentLoaded', function() {
  
  // Select the two map link elements by their IDs in the page
  const mapLink = document.querySelector('#mapLink');
  const mapLinkSmall = document.querySelector('#mapLinkSmall');
  
  // Define the click event handler function for the map links
  const handleMapClick = function(e) {
    // Prevent the default link behavior (which would jump or reload)
    e.preventDefault();

    // Call the function to open the map app or fallback URL based on device
    openMapsApp();
  };

  // If the element with ID 'mapLink' exists, attach the click handler to it
  if (mapLink) {
    mapLink.addEventListener('click', handleMapClick);
  }

  // If the element with ID 'mapLinkSmall' exists, attach the click handler to it
  if (mapLinkSmall) {
    mapLinkSmall.addEventListener('click', handleMapClick);
  }

  // You can add other code here that should run after the DOM is loaded
});









// Detect current environment based on hostname
// Check if the current environment is local (either localhost or a local file)
const isLocal = window.location.hostname === 'localhost' || window.location.protocol === 'file:';

// Check if the current environment is a specific local server (newleafohio.local)
const isLocalServer = window.location.hostname === 'newleafohio.local';

// Set the base path depending on the detected environment
// The basePath will be determined using a ternary operator
// The ternary operator is a shorthand way to perform if-else logic
// The syntax is: condition ? valueIfTrue : valueIfFalse
// In this case, we use nested ternary operators to evaluate multiple conditions:
const basePath = isLocal 
    ? '/Users/13303/Desktop/NEW LEAF/newleaf' // If isLocal is true, use this path (for local development)
    : isLocalServer 
    ? 'http://newleafohio.local' // If isLocalServer is true, use this specific URL for local server testing
    : window.location.origin; // If neither is true, use the current live server URL dynamically

// Insert header content with dynamic basePath
document.getElementById("header").innerHTML = `

	
	<header>
        <div class="branding">
            <a href="${basePath}/index.html">
                     <img 
            src="${basePath}/images/logo.png" 
            alt="new leaf logo"
            onmouseover="this.src='${basePath}/images/logo.png'" 
            onmouseout="this.src='${basePath}/images/logo.png'" 
			class="responsive-logo"
        >
            </a>
        </div>
        <div class="nav">
            <div style="height:0px; padding:20px;">
                <a href="${basePath}/index.html#Services">Services</a>
            </div>
            <div style="height:0px; padding:20px;">
                <a href="${basePath}/Resources.html#Resources">Resources</a>
            </div>
            <div style="height:0px; padding:20px;">
                <a href="${basePath}/recovery-houses.html">Recovery Houses</a>
            </div>
            <div style="height:0px; padding:20px;">
                <a href="${basePath}/find-help.html">Find Help</a>
            </div>
            <div style="height:0px; padding:20px;">
                <a href="${basePath}/get-started.html" style="font-weight:bold;">Get Started</a>
            </div>
        </div>
        <button class="menu-toggle" aria-expanded="false" aria-controls="menu">&#9776;</button>
        <nav id="menu" class="menu">
            <ul class="sub-menu"></ul>
        </nav> 
		 
    

     

<div class="phone"> 
    <!-- Address -->
    <div style="min-width: auto;">  
        <p style="line-height: 1; font-size: 1.2em; margin: 0;">
	
           <a href="#" id="mapLink" style="display: flex; align-items: center; margin: 0;">
                <!-- Map icon SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 1em; height: 1em; margin-right: 0.3em;">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 10.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 5.5 12 5.5 15.5 7.07 15.5 9 13.93 12.5 12 12.5z"/>
                </svg>
                10055 Sweet Valley Dr Valley View, OH
            </a>
        </p>
    </div>

    <!-- Phone -->
    <div style="min-width: auto;">
        <p style="line-height: 1; font-size: 1.2em; margin: 0;">
            <a href="tel:216-770-8911" style="display: flex; align-items: center; margin: 0;">
                <!-- Phone icon SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 1em; height: 1em; margin-right: 0.3em;">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.004 1.004 0 011.11-.24c1.12.45 2.33.7 3.58.7.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.94 21 3 14.06 3 5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.25 2.46.7 3.58.15.35.07.76-.24 1.11l-2.2 2.2z"/>
                </svg>
                Call 216-770-8911
            </a>
        </p>    
    </div>

    <!-- Email -->
    <div style="min-width: auto;">
        <p style="line-height: 1; font-size: 1.2em; margin: 0;">
            <a href="mailto:info@newleafohio.com" style="display: flex; align-items: center; margin: 0;">
                <!-- Email icon SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 1em; height: 1em; margin-right: 0.3em;">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email info@newleafohio.com
            </a>
        </p>
    </div>
</div>

	
	<div class="small_phone"> 
    <div style="min-width:200px; line-height: .06; ">  
        <p style="line-height: .06; font-size: 3vw; margin:2px ">
       <a href="#" id="mapLinkSmall" style="display: flex; align-items: center; margin: 0;">
	  
                <!-- Map icon SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 1em; height: 1em; margin-right: 0.3em;">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 10.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 5.5 12 5.5 15.5 7.07 15.5 9 13.93 12.5 12 12.5z"/>
                </svg>
                10055 Sweet Valley Dr Valley View, OH
            </a>
        </p>
    </div> 

    <div style="min-width:200px; font-size: 4vw;;"> 
        <p style="line-height: .06; margin:2px">
            <a href="tel:216-770-8911" style="display: flex; align-items: center;">
                <!-- Phone icon SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 1em; height: 1em; margin-right: 0.3em;">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.004 1.004 0 011.11-.24c1.12.45 2.33.7 3.58.7.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.94 21 3 14.06 3 5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.25 2.46.7 3.58.15.35.07.76-.24 1.11l-2.2 2.2z"/>
                </svg>
                Call 216-770-8911
            </a>
        </p>	
    </div>

    <div style="min-width:200px; font-size: 4vw;">
        <p style="line-height: .06; margin:2px">
            <a href="mailto:info@newleafohio.com" style="display: flex; align-items: center;">
                <!-- Email icon SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 1em; height: 1em; margin-right: 0.3em;">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email info@newleafohio.com
            </a>
        </p>
    </div>
</div>

	
	
	
	</div>
	
	
	
	</header>
`;

// Insert footer content with dynamic basePath
document.getElementById("footer").innerHTML = `
    <footer>
        <p>&copy; ${new Date().getFullYear()} New Leaf Behavioral Health. All rights reserved. | <a href="${basePath}/public_notice_joint_commission.html" style="color: #d4e1f7;">Joint Commission</a> | New Leaf serves all patients equally, regardless of race, gender, sexual orientation, or religion.</p>
    </footer>
`;
