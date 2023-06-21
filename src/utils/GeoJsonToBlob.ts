/**
 * geojson转文件
 * @param geojson
 * @constructor
 */
export function GeoJsonToBlob(geojson: Object) {
    const blob = new Blob([JSON.stringify(geojson)], { type: 'application/json' });
    return blob;
}
