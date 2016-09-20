module.exports = function() {
    return {
            'Granting-of-Fire-Safety-Certificate' : {
                nextState: 'create',
                firstStage: 'NEW',
                stages: {
                    'NEW' : {
                        nextState: 'fillForm',
                        nextStage:'FORM_FILLED',
                        params: {}
                    },
                    'FORM_FILLED': {
                        nextState: 'uploadCertificate',
                        nextStage: 'UPLOADED_CERTIFICATE',
                        previousState: 'create',
                        previousStage: 'NEW',
                        params: {
                            formType: 'Form I'
                        }
                    },
                    'UPLOADED_CERTIFICATE': {
                        nextState: 'complete',
                        nextStage: 'COMPLETE',
                        previousState: 'fillForm',
                        previousStage: 'FORM_FILLED',
                        params: {
                            documentType: 'Certificate from Architect'
                        }
                    },
                    'COMPLETE': {
                        previousState: 'uploadCertificate',
                        previousStage: 'UPLOADED_CERTIFICATE',
                    }
                }
            },
            'Renewal-of-Fire-Safety-Certificate' : {
                nextState: 'create',
                firstStage: 'NEW',
                stages: {
                    'NEW' : {
                        nextState: 'fillForm',
                        nextStage:'FORM_FILLED',
                        params: {}
                    },
                    'FORM_FILLED': {
                        nextState: 'fillDeclarationForm',
                        nextStage: 'DECLARATION_FORM_FILLED',
                        previousState: 'create',
                        previousStage: 'NEW',
                        params: {
                            formType: 'Form J'
                        }
                    },
                    'DECLARATION_FORM_FILLED': {
                        nextState: 'uploadFsc',
                        nextStage: 'UPLOADED_FSC',
                        previousState: 'fillForm',
                        previousStage: 'FORM_FILLED',
                        params: {
                            formType: 'Form K'
                        }
                    },
                    'UPLOADED_FSC': {
                        nextState: 'complete',
                        nextStage: 'COMPLETE',
                        previousState: 'fillDeclarationForm',
                        previousStage: 'DECLARATION_FORM_FILLED',
                        params: {
                            documentType: 'Fire Safety Certificate'
                        }
                    },
                    'COMPLETE': {
                        previousState: 'uploadFsc',
                        previousStage: 'UPLOADED_FSC'
                    }
                }
            },
            'Declaration-by-Owner/Occupier' : {
                nextState: 'create',
                firstStage: 'NEW',
                stages: {
                    'NEW' : {
                        nextState: 'fillForm',
                        nextStage:'FORM_FILLED',
                        params: {}
                    },
                    'FORM_FILLED': {
                        nextState: 'complete',
                        nextStage: 'COMPLETE',
                        previousState: 'create',
                        previousStage: 'NEW',
                        params: {
                            formType: 'Form K'
                        }
                    },
                    'COMPLETE': {
                        previousState: 'fillForm',
                        previousStage: 'FORM_FILLED'
                    }
                }
            }
        };
};
