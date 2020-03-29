import MainParticipantInfo from '../MainParticipantInfo/MainParticipantInfo';
import ParticipantTracks from '../ParticipantTracks/ParticipantTracks';
import React from 'react';
import useMainSpeaker from '../../hooks/useMainSpeaker/useMainSpeaker';
import useSelectedParticipant from '../VideoProvider/useSelectedParticipant/useSelectedParticipant';
import useScreenShareParticipant from '../../hooks/useScreenShareParticipant/useScreenShareParticipant';
import useParticipants from '../../hooks/useParticipants/useParticipants'


export default function DefenseCounselParticipant() {
  const mainParticipant = useMainSpeaker({role: 'Defense Counsel'});
  const [selectedParticipant] = useSelectedParticipant();
  const screenShareParticipant = useScreenShareParticipant();
  const participants = useParticipants()

  // const videoPriority =
  //   mainParticipant === selectedParticipant || mainParticipant === screenShareParticipant ? 'high' : null;

  return (
    /* audio is disabled for this participant component because this participant's audio 
       is already being rendered in the <ParticipantStrip /> component.  */
    <MainParticipantInfo participant={mainParticipant}>
      <ParticipantTracks participant={mainParticipant} disableAudio enableScreenShare videoPriority='high' />
    </MainParticipantInfo>
  );
}

