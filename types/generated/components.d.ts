import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsBlocks extends Schema.Component {
  collectionName: 'components_components_blocks';
  info: {
    displayName: 'Blocks';
  };
  attributes: {
    test: Attribute.String;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'bold';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    URL: Attribute.String;
    Style: Attribute.Enumeration<['white_round', 'animated_circle']>;
  };
}

export interface ComponentsHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero - Standard';
    icon: 'expand';
    description: '';
  };
  attributes: {
    tag: Attribute.String;
    title: Attribute.String;
    content: Attribute.Text;
    featuredimage: Attribute.Media;
    buttons: Attribute.Component<'components.button', true> &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface ComponentsServices extends Schema.Component {
  collectionName: 'components_components_services';
  info: {
    displayName: 'Services';
    icon: 'expand';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
    smallText: Attribute.Text;
    webDesignText: Attribute.Text;
    webDevelopmentText: Attribute.Text;
    maintainanceText: Attribute.Text;
    images: Attribute.Media;
  };
}

export interface ComponentsTechnologies extends Schema.Component {
  collectionName: 'components_components_technologies';
  info: {
    displayName: 'Technologies';
    icon: 'expand';
    description: '';
  };
  attributes: {
    tag: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    images: Attribute.Media;
  };
}

export interface ComponentsTechnologyImage extends Schema.Component {
  collectionName: 'components_components_technology_images';
  info: {
    displayName: 'Technology Image';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ComponentsTriangleSection extends Schema.Component {
  collectionName: 'components_components_triangle_sections';
  info: {
    displayName: 'triangle_section';
    icon: 'play';
  };
  attributes: {
    type: Attribute.Enumeration<['start', 'end']>;
  };
}

export interface NavigationCtaLink extends Schema.Component {
  collectionName: 'components_navigation_cta_links';
  info: {
    displayName: 'CTA Link';
    icon: 'eye';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface NavigationUrl extends Schema.Component {
  collectionName: 'components_navigation_urls';
  info: {
    displayName: 'URL';
    icon: 'bulletList';
  };
  attributes: {
    Label: Attribute.String;
    Link: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'MetaSocial';
    icon: 'cast';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']>;
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
    MetaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.String;
    metaRobots: Attribute.String;
    stuructureData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.blocks': ComponentsBlocks;
      'components.button': ComponentsButton;
      'components.hero': ComponentsHero;
      'components.services': ComponentsServices;
      'components.technologies': ComponentsTechnologies;
      'components.technology-image': ComponentsTechnologyImage;
      'components.triangle-section': ComponentsTriangleSection;
      'navigation.cta-link': NavigationCtaLink;
      'navigation.url': NavigationUrl;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
