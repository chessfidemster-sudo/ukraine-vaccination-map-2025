// JavaScript file to style Ivano-Frankivsk Oblast boundary in red

// Function to style the oblast boundary in red
function styleOblastBoundary() {
    // Remove existing GeoJSON layer if it exists
    if (window.oblastLayer) {
        map.removeLayer(window.oblastLayer);
    }
    
    // Use only features[12] from the geoJsonData
    const targetFeature = geoJsonData.features[12];
    
    // Add the GeoJSON layer with red styling for the specific feature
    window.oblastLayer = L.geoJSON(targetFeature, {
        style: {
            color: "#FF0000",        // Red color for the boundary
            weight: 5,               // Line thickness (increased as requested)
            opacity: 1,              // Full opacity
            fillColor: "transparent", // No fill color
            fillOpacity: 0           // No fill opacity
        },
        onEachFeature: function (feature, layer) {
            // Add popup with oblast information
            if (feature.properties && feature.properties.shapeName) {
                layer.bindPopup(`<b>${feature.properties.shapeName}</b><br/>Oblast boundary outlined in red`);
            }
        }
    }).addTo(map);
    
    // Fit map to oblast boundaries
    map.fitBounds(window.oblastLayer.getBounds());
}

// Initialize red boundary styling when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure the map and geojsonData are loaded
    setTimeout(styleOblastBoundary, 500);
});

// Export function for manual calling if needed
window.styleOblastBoundary = styleOblastBoundary;
