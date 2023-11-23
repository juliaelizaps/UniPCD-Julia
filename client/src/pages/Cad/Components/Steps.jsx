import React from 'react';
import {
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    Stepper,
} from '@chakra-ui/react';

const steps = [
    { description: 'Informações do usuário' },
    { description: 'Dados onde mora' },
    { description: 'Deficiência' },
    { description: 'Resumo' },
];

const StepTest = props => {
    return (
        <Stepper size="lg" index={props.currentStep}>
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box flexShrink="0">
                        <StepDescription>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    );
};

export default StepTest;
