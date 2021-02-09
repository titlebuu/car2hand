export let SWAGGER = {
    swagger: '2.0',
    info: {
        description: 'This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.',
        version: '1.0.5',
        title: 'Swagger Petstore',
        termsOfService: 'http://swagger.io/terms/',
        contact: {
            email: 'apiteam@swagger.io'
        },
        license: {
            name: 'Apache 2.0',
            url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    host: 'petstore.swagger.io',
    basePath: '/v2',
    tags: [
        {
            name: 'pet',
            description: 'Everything about your Pets',
            externalDocs: {
                description: 'Find out more',
                url: 'http://swagger.io'
            }
        },
        {
            name: 'store',
            description: 'Access to Petstore orders'
        },
        {
            name: 'user',
            description: 'Operations about user',
            externalDocs: {
                description: 'Find out more about our store',
                url: 'http://swagger.io'
            }
        }
    ],
    schemes: [
        'https',
        'http'
    ],
    paths: {
        '/pet/{petId}uploadImage': {
            post: {
                tags: [
                    'pet'
                ],
                summary: 'uploads an image',
                description: '',
                operationId: 'uploadFile',
                consumes: [
                    'multipart/form-data'
                ],
                produces: [
                    'application/json'
                ],
                parameters: [
                    {
                        name: 'petId',
                        in: 'path',
                        description: 'ID of pet to update',
                        required: true,
                        type: 'integer',
                        format: 'int64'
                    },
                    {
                        name: 'additionalMetadata',
                        in: 'formData',
                        description: 'Additional data to pass to server',
                        required: false,
                        type: 'string'
                    },
                    {
                        name: 'file',
                        in: 'formData',
                        description: 'file to upload',
                        required: false,
                        type: 'file'
                    }
                ],
                responses: {
                    200: {
                        description: 'successful operation',
                        schema: {
                            ref: '# / definitions / ApiResponse'
                        }
                    }
                },
                security: [
                    {
                        petstore_auth: [
                            'write:pets',
                            'read:pets'
                        ]
                    }
                ]
            }
        }
    },
    securityDefinitions: {
        api_key: {
            type: 'apiKey',
            name: 'api_key',
            in: 'header'
        },
        petstore_auth: {
            type: 'oauth2',
            authorizationUrl: 'https://petstore.swagger.io/oauth/authorize',
            flow: 'implicit',
            scopes: {
                readpets: 'read your pets',
                writepets: 'modify pets in your account'
            }
        }
    },
    definitions: {
        ApiResponse: {
            type: 'object',
            properties: {
                code: {
                    type: 'integer',
                    format: 'int32'
                },
                type: {
                    type: 'string'
                },
                message: {
                    type: 'string'
                }
            }
        },
        Category: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    format: 'int64'
                },
                name: {
                    type: 'string'
                }
            },
            xml: {
                name: 'Category'
            }
        },
        Pet: {
            type: 'object',
            required: [
                'name',
                'photoUrls'
            ],
            properties: {
                id: {
                    type: 'integer',
                    format: 'int64'
                },
                category: {
                    ref: '# / definitions / Category'
                },
                name: {
                    type: 'string',
                    example: 'doggie'
                },
                photoUrls: {
                    type: 'array',
                    xml: {
                        wrapped: true
                    },
                    items: {
                        type: 'string',
                        xml: {
                            name: 'photoUrl'
                        }
                    }
                },
                tags: {
                    type: 'array',
                    xml: {
                        wrapped: true
                    },
                    items: {
                        xml: {
                            name: 'tag'
                        },
                        ref: '# / definitions / Tag'
                    }
                },
                status: {
                    type: 'string',
                    description: 'pet status in the store',
                    enum: [
                        'available',
                        'pending',
                        'sold'
                    ]
                }
            },
            xml: {
                name: 'Pet'
            }
        },
        Tag: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    format: 'int64'
                },
                name: {
                    type: 'string'
                }
            },
            xml: {
                name: 'Tag'
            }
        },
        Order: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    format: 'int64'
                },
                petId: {
                    type: 'integer',
                    format: 'int64'
                },
                quantity: {
                    type: 'integer',
                    format: 'int32'
                },
                shipDate: {
                    type: 'string',
                    format: 'date-time'
                },
                status: {
                    type: 'string',
                    description: 'Order Status',
                    enum: [
                        'placed',
                        'approved',
                        'delivered'
                    ]
                },
                complete: {
                    type: 'boolean'
                }
            },
            xml: {
                name: 'Order'
            }
        },
        User: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    format: 'int64'
                },
                username: {
                    type: 'string'
                },
                firstName: {
                    type: 'string'
                },
                lastName: {
                    type: 'string'
                },
                email: {
                    type: 'string'
                },
                password: {
                    type: 'string'
                },
                phone: {
                    type: 'string'
                },
                userStatus: {
                    type: 'integer',
                    format: 'int32',
                    description: 'User Status'
                }
            },
            xml: {
                name: 'User'
            }
        }
    },
    externalDocs: {
        description: 'Find out more about Swagger',
        url: 'http://swagger.io'
    }
};
