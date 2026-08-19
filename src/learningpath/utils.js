import { getConfig } from '@edx/frontend-platform';

/**
 * Builds a URL to the course home page in the learning MFE.
 * @param {string} courseId - The course id.
 * @returns {string} URL to the course home page.
 */
export const buildCourseHomeUrl = (courseId) => {
  const learningMfeBase = getConfig().LEARNING_BASE_URL;
  const trimmedBase = learningMfeBase.replace(/\/$/, '');
  const sanitizedBase = trimmedBase.endsWith('/learning')
    ? trimmedBase
    : `${trimmedBase}/learning`;
  return `${sanitizedBase}/course/${courseId}/home`;
};

export const buildMarketingSiteCourseUrl = (courseId) => {
  const marketingSiteBase = getConfig().MARKETING_SITE_BASE_URL;
  return `${marketingSiteBase}/${courseId}`;
};

export const buildCourseAboutUrl = (courseId) => {
  const lmsBaseUrl = getConfig().LMS_BASE_URL;
  const trimmedBase = lmsBaseUrl.replace(/\/$/, '');
  return `${trimmedBase}/courses/${courseId}/about`;
};

export const mapApiError = (response, formatMessage, messages) => {
  const code = response?.data?.code;
  if (code === 'user_limit_reached') {
    return formatMessage(messages.userLimitReached);
  }
  if (code === 'catalog_unavailable') {
    return formatMessage(messages.catalogUnavailable);
  }
  return response?.data?.detail || formatMessage(messages.failedToLoadDetail);
};
