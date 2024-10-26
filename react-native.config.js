module.exports = {
    dependencies: {
        'react-native-vector-icons': {
            platforms: {
                ios: null
            }
        }
    },
    assets: ['./src/assets/fonts'],
    project: {
        android: {
            unstable_reactLegacyComponentNames: [
                'AIRMap',
                'AIRMapCallout',
                'AIRMapCalloutSubview',
                'AIRMapCircle',
                'AIRMapHeatmap',
                'AIRMapLocalTile',
                'AIRMapMarker',
                'AIRMapOverlay',
                'AIRMapPolygon',
                'AIRMapPolyline',
                'AIRMapUrlTile',
                'AIRMapWMSTile'
            ]
        },
        ios: {
            unstable_reactLegacyComponentNames: [
                'AIRMap',
                'AIRMapCallout',
                'AIRMapCalloutSubview',
                'AIRMapCircle',
                'AIRMapHeatmap',
                'AIRMapLocalTile',
                'AIRMapMarker',
                'AIRMapOverlay',
                'AIRMapPolygon',
                'AIRMapPolyline',
                'AIRMapUrlTile',
                'AIRMapWMSTile'
            ]
        }
    }
};
