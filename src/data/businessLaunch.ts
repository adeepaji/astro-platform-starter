// BF GYM Global — disabled-by-default launch controls.
// These environment flags record the owner's completion of reviews, NOT legal approval.
// They must not be enabled before the business, visa, privacy and tax positions are verified.
const businessReviewCompleted = import.meta.env.PUBLIC_BF_BUSINESS_REVIEW_COMPLETED === 'true';
const privacyNoticeCompleted = import.meta.env.PUBLIC_BF_PRIVACY_NOTICE_APPROVED === 'true';
export const publicEnquiriesEnabled =
  businessReviewCompleted && privacyNoticeCompleted &&
  import.meta.env.PUBLIC_BF_ENABLE_ENQUIRIES === 'true';
export const commercialServicesEnabled =
  businessReviewCompleted && privacyNoticeCompleted &&
  import.meta.env.PUBLIC_BF_ENABLE_PAID_SERVICES === 'true';
export const brand = 'BF GYM Global';
// Owner-defined expansion of BF; keep the public-facing short brand unchanged.
export const brandExpandedName = 'Best Fitness Gym Global';
export const businessRegion = 'United Kingdom';
export const primaryDelivery = 'Online fitness education, with global coaching planned';
