module.exports = function() {
    return {
            BuildingPlanNOC : {
                nextState: 'create',
                firstStage: 'NEW',
                stages: {
                    'NEW' : {
                        nextState: 'fillForm',
                        nextStage:'FORM_FILLED',
                        params: {}
                    },
                    'FORM_FILLED': {
                        nextState: 'uploadDesign',
                        nextStage: 'UPLOADED_DESIGN',
                        previousState: 'create',
                        previousStage: 'NEW',
                        params: {
                            formType: 'Form-I'
                        }
                    },
                    'UPLOADED_DESIGN': {
                        nextState: 'complete',
                        nextStage: 'COMPLETE',
                        previousState: 'fillForm',
                        previousStage: 'FORM_FILLED',
                        params: {
                            documentType: 'Architecture'
                        }
                    },
                    'COMPLETE': {
                        previousState: 'uploadDesign',
                        previousStage: 'UPLOADED_DESIGN',
                    }
                }
            },
            NewBuildingNOC : {
                nextState: 'create',
                firstStage: 'NEW',
                stages: {
                    'NEW' : {
                        nextState: 'fillForm',
                        nextStage:'FORM_FILLED',
                        params: {}
                    },
                    'FORM_FILLED': {
                        nextState: 'uploadId',
                        nextStage: 'UPLOADED_ID',
                        params: {
                            formType: 'Form-I'
                        }
                    },
                    'UPLOADED_ID': {
                        nextState: 'complete',
                        nextStage: 'COMPLETE',
                        params: {
                            documentType: 'Photo ID Proof'
                        }
                    },
                    'COMPLETE': {

                    }
                }
            }
        };
};
