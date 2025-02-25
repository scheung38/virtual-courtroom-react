import useVideoContext from '../useVideoContext/useVideoContext';
import useDominantSpeaker from '../useDominantSpeaker/useDominantSpeaker';
import useParticipants from '../useParticipants/useParticipants';
import useScreenShareParticipant from '../useScreenShareParticipant/useScreenShareParticipant';
import useSelectedParticipant from '../../components/VideoProvider/useSelectedParticipant/useSelectedParticipant';

export default function useMainSpeaker({role}={role: 'Judge'}) {
  const [selectedParticipant] = useSelectedParticipant();
  const screenShareParticipant = useScreenShareParticipant();
  const dominantSpeaker = useDominantSpeaker();
  const participants = useParticipants();
  const {
    room: { localParticipant },
  } = useVideoContext();

  const participant = participants.find(participant => participant.identity === role)


  // The participant that is returned is displayed in the main video area. Changing the order of the following
  // variables will change the how the main speaker is determined.
  // return selectedParticipant || screenShareParticipant || dominantSpeaker || participants[0] || localParticipant;
  return  participant || localParticipant;

}
