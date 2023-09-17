/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Button, Card, Grid } from '@mantine/core';
import { memo } from 'react';

const ButtonFooter = ({ firstTitle, firstAction, secondTitle, secondAction, thirdTitle, thirdAction, isDisabled }) => {
  return (
    <Card withBorder>
      <Grid>
        <Grid.Col span={12}>
          <div style={{ display: 'flex', justifyContent: firstTitle ? 'space-between' : 'flex-end' }}>
            {firstTitle && (
              <Button color="red" onClick={firstAction} w={100}>
                {firstTitle}
              </Button>
            )}
            <div>
              {secondTitle && (
                <Button mr="xl" onClick={secondAction || null} w={100}>
                  {secondTitle}
                </Button>
              )}
              <Button onClick={thirdAction} disabled={isDisabled} w={100}>
                {thirdTitle}
              </Button>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default memo(ButtonFooter);
