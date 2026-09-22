
function openMapsApp(address) {
  const encodedAddress = encodeURIComponent(address);
  
  // Check the user’s device
  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    // For iOS devices, open in Apple Maps
    window.open(`maps://maps.apple.com/?address=${encodedAddress}`, '_blank');
  } else if (navigator.userAgent.match(/Android/i)) {
    // For Android devices, open in Google Maps app
    window.open(`geo:0,0?q=${encodedAddress}`, '_blank');
  } else {
    // For desktops or other devices, open Google Maps in browser
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  }
}

// Example usage
openMapsApp("10055 Sweet Valley Dr, Valley View, OH 44125");



