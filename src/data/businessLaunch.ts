// BF GYM Global launch controls.
// These flags are operational switches, NOT immigration or tax approval.
// Keep disabled until a qualified adviser and the business owner have reviewed
// the actual service duties, business terms, privacy notice and tax position.
export const commercialServicesEnabled = import.meta.env.PUBLIC_BF_ENABLE_PAID_SERVICES === 'true';
export const publicEnquiriesEnabled = commercialServicesEnabled && import.meta.env.PUBLIC_BF_PRIVACY_NOTICE_APPROVED === 'true';
export const brand = 'BF GYM Global';
export const businessRegion = 'United Kingdom';
export const primaryDelivery = 'Online coaching for an international audience';
