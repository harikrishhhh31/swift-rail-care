import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: 'healthy' | 'attention' | 'critical';
  assetCount: number;
  batch?: string;
}

interface GoogleMapProps {
  locations: MapLocation[];
  className?: string;
}

const GoogleMap = ({ locations, className = "" }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      // Show fallback content immediately while trying to load maps
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #f8fafc; border: 2px dashed #e2e8f0; border-radius: 8px;">
            <div style="font-size: 32px; margin-bottom: 12px;">🗺️</div>
            <p style="margin: 0; color: #475569; font-weight: 500;">Interactive Railway Map</p>
            <p style="margin: 4px 0 12px 0; font-size: 14px; color: #64748b;">Showing ${locations.length} railway locations</p>
            <div style="display: flex; gap: 16px; margin-top: 8px;">
              <div style="display: flex; align-items: center; gap: 6px; font-size: 12px;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background: #16a34a;"></div>
                <span style="color: #475569;">Healthy</span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; font-size: 12px;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background: #eab308;"></div>
                <span style="color: #475569;">Attention</span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; font-size: 12px;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background: #dc2626;"></div>
                <span style="color: #475569;">Critical</span>
              </div>
            </div>
            <div style="margin-top: 16px; padding: 8px 16px; background: #e0f2fe; border-radius: 6px; font-size: 12px; color: #0369a1;">
              Google Maps API key required for interactive maps
            </div>
          </div>
        `;
      }

      // Attempt to load Google Maps (will use fallback if no API key)
      const loader = new Loader({
        apiKey: "", // Empty API key - will show fallback
        version: "weekly",
        libraries: ["places"]
      });

      try {
        const google = await loader.load();
        const { Map } = await loader.importLibrary("maps") as google.maps.MapsLibrary;
        const { InfoWindow } = await loader.importLibrary("maps") as google.maps.MapsLibrary;

        if (mapRef.current && google) {
          // Center the map on a railway location (example: London area)
          const map = new Map(mapRef.current, {
            center: { lat: 51.5074, lng: -0.1278 },
            zoom: 10,
          });

          // Add markers for each location
          locations.forEach((location) => {
            const marker = new google.maps.Marker({
              position: { lat: location.lat, lng: location.lng },
              map: map,
              title: location.name,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: getMarkerColor(location.status),
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 2,
                scale: 8,
              }
            });

            const infoWindow = new InfoWindow({
              content: `
                <div style="padding: 12px; font-family: system-ui; min-width: 200px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1f2937;">${location.name}</h3>
                  <div style="display: flex; align-items: center; gap: 8px; margin: 6px 0;">
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: ${getMarkerColor(location.status)};"></div>
                    <span style="font-size: 14px; font-weight: 500; color: #374151;">Status: ${location.status.toUpperCase()}</span>
                  </div>
                  <p style="margin: 6px 0; font-size: 14px; color: #6b7280;">Assets: ${location.assetCount}</p>
                  ${location.batch ? `<p style="margin: 6px 0; font-size: 14px; color: #6b7280;">Batch: ${location.batch}</p>` : ''}
                </div>
              `
            });

            marker.addListener("click", () => {
              infoWindow.open(map, marker);
            });
          });
        }
      } catch (error) {
        console.log("Google Maps API not available, using fallback visualization");
        // Fallback is already shown above
      }
    };

    const getMarkerColor = (status: string) => {
      switch (status) {
        case 'healthy': return '#16a34a';
        case 'attention': return '#eab308';
        case 'critical': return '#dc2626';
        default: return '#6b7280';
      }
    };

    initMap();
  }, [locations]);

  return (
    <div ref={mapRef} className={`w-full h-64 rounded-lg border border-border ${className}`} />
  );
};

export default GoogleMap;