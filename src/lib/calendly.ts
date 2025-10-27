// Calendly API integration utilities
// This file helps you get your Calendly scheduling links from your API token

export interface CalendlyUser {
  uri: string;
  name: string;
  slug: string;
  email: string;
  scheduling_url: string;
  timezone: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
  current_organization: string;
}

export interface CalendlyEventType {
  uri: string;
  name: string;
  active: boolean;
  slug: string;
  scheduling_url: string;
  duration: number;
  kind: string;
  pooling_type: string;
  type: string;
  color: string;
  created_at: string;
  updated_at: string;
  internal_note: string;
  description_plain: string;
  description_html: string;
  profile: {
    type: string;
    owner: string;
    name: string;
  };
  secret: boolean;
  booking_method: string;
  custom_questions: unknown[];
  deleted_at: string | null;
}

export interface CalendlyResponse<T> {
  collection: T[];
  pagination: {
    count: number;
    next_page: string | null;
    previous_page: string | null;
    next_page_token: string | null;
  };
}

/**
 * Get your Calendly user information
 * This will help you find your username for the scheduling URL
 */
export async function getCalendlyUser(apiToken: string): Promise<CalendlyUser> {
  const response = await fetch('https://api.calendly.com/users/me', {
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Calendly API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.resource;
}

/**
 * Get your Calendly event types
 * This will help you find the specific event type URLs
 */
export async function getCalendlyEventTypes(apiToken: string, userUri: string): Promise<CalendlyEventType[]> {
  const response = await fetch(`https://api.calendly.com/event_types?user=${encodeURIComponent(userUri)}`, {
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Calendly API error: ${response.status} ${response.statusText}`);
  }

  const data: CalendlyResponse<CalendlyEventType> = await response.json();
  return data.collection;
}

/**
 * Helper function to extract username from Calendly scheduling URL
 */
export function extractUsernameFromSchedulingUrl(schedulingUrl: string): string | null {
  const match = schedulingUrl.match(/calendly\.com\/([^\/]+)/);
  return match ? match[1] : null;
}

/**
 * Helper function to create a strategy call URL
 * Replace 'your-username' with your actual Calendly username
 */
export function createStrategyCallUrl(username: string): string {
  return `https://calendly.com/${username}/strategy-call`;
}

/**
 * Helper function to create a general meeting URL
 * Replace 'your-username' with your actual Calendly username
 */
export function createGeneralMeetingUrl(username: string): string {
  return `https://calendly.com/${username}`;
}
