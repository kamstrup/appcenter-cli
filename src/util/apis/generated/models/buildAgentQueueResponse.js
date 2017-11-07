/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the BuildAgentQueueResponse class.
 * @constructor
 * Queue configured in build definition
 *
 * @member {string} [buildDefinition] Name of the build definition
 * 
 * @member {string} [name] Name of the queue
 * 
 */
function BuildAgentQueueResponse() {
}

/**
 * Defines the metadata of BuildAgentQueueResponse
 *
 * @returns {object} metadata of BuildAgentQueueResponse
 *
 */
BuildAgentQueueResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BuildAgentQueueResponse',
    type: {
      name: 'Composite',
      className: 'BuildAgentQueueResponse',
      modelProperties: {
        buildDefinition: {
          required: false,
          serializedName: 'buildDefinition',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = BuildAgentQueueResponse;