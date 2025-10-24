import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_project_process_steps';
  info: {
    displayName: 'processStep';
    icon: 'clock';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.process-step': ProjectProcessStep;
    }
  }
}
