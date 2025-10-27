/**
 * Utility functions for handling external links and CTAs
 */
import React from 'react';

/**
 * Determines if a URL should open in a new tab
 * @param href - The URL to check
 * @returns boolean indicating if it should open in new tab
 */
export function shouldOpenInNewTab(href: string): boolean {
  // External links (not same domain)
  if (href.startsWith('http') && !href.includes(window.location.hostname)) {
    return true;
  }
  
  // Calendly links (always open in new tab for better UX)
  if (href.includes('calendly.com')) {
    return true;
  }
  
  // Other scheduling/booking platforms
  if (href.includes('acuityscheduling.com') || 
      href.includes('calendso.com') || 
      href.includes('youcanbook.me')) {
    return true;
  }
  
  // Form platforms
  if (href.includes('tally.so') || 
      href.includes('typeform.com') || 
      href.includes('airtable.com')) {
    return true;
  }
  
  return false;
}

/**
 * Gets the appropriate props for a link based on its destination
 * @param href - The URL
 * @returns Object with target and rel props
 */
export function getLinkProps(href: string): { target?: string; rel?: string } {
  if (shouldOpenInNewTab(href)) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer'
    };
  }
  
  if (href.startsWith('http')) {
    return {
      rel: 'noopener noreferrer'
    };
  }
  
  return {};
}

/**
 * Adds a visual indicator for external links
 * @param href - The URL
 * @returns JSX element for external link indicator
 */
export function getExternalLinkIndicator(href: string): React.ReactElement | null {
  if (shouldOpenInNewTab(href)) {
    return (
      <svg 
        className="inline-block w-3 h-3 ml-1 opacity-60" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
        />
      </svg>
    );
  }
  
  return null;
}
