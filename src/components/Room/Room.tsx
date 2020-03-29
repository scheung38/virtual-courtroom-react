import React from 'react';
import ParticipantStrip from '../ParticipantStrip/ParticipantStrip';
import { styled } from '@material-ui/core/styles';

import JudgeParticipant from '../JudgeParticipant/JudgeParticipant';
import ClerkParticipant from '../ClerkParticipant/ClerkParticipant';
import DefendantParticipant from '../DefendantParticipant/DefendantParticipant'
import DefenseCounselParticipant from '../DefenseCounselParticipant/DefenseCounselParticipant'
import PlaintiffParticipant from '../PlaintiffParticipant/PlaintiffParticipant';
import PlaintiffCounselParticipant from '../PlaintiffCounselParticipant/PlaintiffCounselParticipant'

const Container = styled('div')({
  position: 'relative',
  height: '100%',
});

const MainParticipantContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: theme.sidebarWidth,
  top: 0,
  bottom: 0,
  '& > div': {
    height: 'calc(100% / 3)',
  },
}));

const DefendantAndPlaintiffContainer = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  '& > div': {
    width: '40%',
    height: '100%'
  },
}));

const DefendantContainer = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  '& > div': {
    width: '50%',
    height: '100%'
  },
}));

const PlaintiffContainer = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  '& > div': {
    width: '50%',
    height: '100%'
  },
}));




export default function Room() {
  return (
    <Container>
      <ParticipantStrip />
      <MainParticipantContainer>
        <JudgeParticipant />
        <ClerkParticipant />
        <DefendantAndPlaintiffContainer>
          <DefendantContainer>
            <DefenseCounselParticipant />
            <DefendantParticipant />
          </DefendantContainer>
          <PlaintiffContainer>
            <PlaintiffCounselParticipant />
            <PlaintiffParticipant />
          </PlaintiffContainer>
        </DefendantAndPlaintiffContainer>
      </MainParticipantContainer>
    </Container>
  );
}
