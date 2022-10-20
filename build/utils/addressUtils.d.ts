declare function addressObjFromGoogleResult(place: any): {
    company: any;
    street_address: any;
    local_area: any;
    city: any;
    zone: any;
    country: any;
    code: any;
    lat_lng: any;
    lat: any;
    lng: any;
    types: string[];
};
declare function formatEnteredAddressLine(address: string, lineNumber: number | undefined, bold: boolean): any;
declare function formatEnteredAddress(address: string): any;
declare function generateEnteredAddress(addressObj: any): string;
declare function validateAddress(address: any): string;
declare function validateGoogleAddressType(addressObj: any, invalidTypes: string[]): boolean;
export { addressObjFromGoogleResult, formatEnteredAddress, formatEnteredAddressLine, generateEnteredAddress, validateGoogleAddressType, validateAddress };
