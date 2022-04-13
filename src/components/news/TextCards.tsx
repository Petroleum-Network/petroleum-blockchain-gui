import React, { ReactNode, ReactElement } from 'react';
import styled from 'styled-components';
import { Flex } from '@chia/core';
import {
    Box,
    Card,
    CardContent,
    Typography,
    TypographyProps,
    CircularProgress,
} from '@material-ui/core';
import useOpenExternal from '../../hooks/useOpenExternal';

const StyledCard = styled(Card)`
  height: 100%;
  overflow: visible;
  margin-bottom: -0.5rem;
`;

const StyledTitle = styled.div`
  margin-bottom: 0.5rem;
`;

const StyledValue = styled(Typography)`
  font-size: 1.25rem;
`;

type Props = {
    date: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    loading?: boolean;
    url?: ReactNode;
};

export default function TextCard(props: Props) {
    const { date, title, description, loading, url } = props;
    const openExternal = useOpenExternal();

    return (
        <StyledCard>
            <CardContent>
                <StyledTitle>
                    <Flex gap={1} alignItems="center">
                        <Typography color="textSecondary">{date}</Typography>
                    </Flex>
                </StyledTitle>
                {loading ? (
                    <Box>
                        <CircularProgress color="secondary" size={25} />
                    </Box>
                ) : (
                    <StyledValue variant="h5" onClick={()=> openExternal(`${url}`)}>
                        {title}
                    </StyledValue>
                )}

                {description && (
                    <Typography variant="caption" color="textSecondary">
                        {description}
                    </Typography>
                )}
            </CardContent>
        </StyledCard>
    );
}

TextCard.defaultProps = {
    valueColor: 'primary',
    description: undefined,
    loading: false,
    value: undefined,
};
