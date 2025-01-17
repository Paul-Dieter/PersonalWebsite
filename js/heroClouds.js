//Clouds JS

document.addEventListener('DOMContentLoaded', function() {
    // Ensure Vanta effect is applied once the page is fully loaded
    var setVanta = () => {
      if (window.VANTA) {
        window.VANTA.CLOUDS({
          el: ".hero", // Target the correct element
          mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    skyColor: 0x87CEEB,
    speed: 0.7      // Speed of the effect (0 is static)
        });
      }
    };
  
    // Initialize Vanta effect once the DOM is loaded
    setVanta();
  
    // Optional: If you're using custom event listeners for page fades, uncomment this section
    if (typeof _strk !== 'undefined' && typeof _strk.push === 'function') {
      _strk.push(function() {
        setVanta();
        if (window.edit_page && window.edit_page.Event) {
          window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", setVanta);
        }
      });
    }
  });
  