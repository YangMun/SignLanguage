type VideoAssets = {
  [key: string]: {
    [key: string]: any;
  };
};

export const videoAssets: VideoAssets = {
    '가족': {
      '아버지': require('../../studyPage/assets/hands/가족/아버지.mp4'),
      '어머니': require('../../studyPage/assets/hands/가족/어머니.mp4'),
      '딸': require('../../studyPage/assets/hands/가족/딸.mp4'),
      '아들': require('../../studyPage/assets/hands/가족/아들.mp4'),
      '언니/누나': require('../../studyPage/assets/hands/가족/언니,누나.mp4'),
      '형/오빠': require('../../studyPage/assets/hands/가족/형,오빠.mp4')
    },
    '날씨': {
      '계절': require('../../studyPage/assets/hands/날씨/계절.mp4'),
      '눈': require('../../studyPage/assets/hands/날씨/눈.mp4'),
      '다니다': require('../../studyPage/assets/hands/날씨/다니다.mp4'),
      '산': require('../../studyPage/assets/hands/날씨/산.mp4'),
      '싫다': require('../../studyPage/assets/hands/날씨/싫다.mp4'),
      '우산': require('../../studyPage/assets/hands/날씨/우산.mp4')
    },
    '시간': {
      '내일': require('../../studyPage/assets/hands/시간/내일.mp4'),
      '어제': require('../../studyPage/assets/hands/시간/어제.mp4'),
      '언제': require('../../studyPage/assets/hands/시간/언제.mp4'),
      '없다': require('../../studyPage/assets/hands/시간/없다.mp4'),
      '오늘': require('../../studyPage/assets/hands/시간/오늘.mp4'),
      '있다': require('../../studyPage/assets/hands/시간/있다.mp4')
    },
    '인사': {
      '나/저': require('../../studyPage/assets/hands/인사/나,저.mp4'),
      '너/당신': require('../../studyPage/assets/hands/인사/너,당신.mp4'),
      '반갑다': require('../../studyPage/assets/hands/인사/반갑다.mp4'),
      '안녕하세요': require('../../studyPage/assets/hands/인사/안녕하세요.mp4'),
      '이름': require('../../studyPage/assets/hands/인사/이름.mp4'),
      '인사': require('../../studyPage/assets/hands/인사/인사.mp4')
    },
    '장소': {
      '고향': require('../../studyPage/assets/hands/장소/고향.mp4'),
      '길': require('../../studyPage/assets/hands/장소/길.mp4'),
      '네/맞다': require('../../studyPage/assets/hands/장소/네,맞다.mp4'),
      '아파트': require('../../studyPage/assets/hands/장소/아파트.mp4'),
      '이웃': require('../../studyPage/assets/hands/장소/이웃.mp4'),
      '집': require('../../studyPage/assets/hands/장소/집.mp4')
    },
    '초대': {
      '궁금하다': require('../../studyPage/assets/hands/초대/궁금하다.mp4'),
      '배고프다': require('../../studyPage/assets/hands/초대/배고프다.mp4'),
      '배부르다': require('../../studyPage/assets/hands/초대/배부르다.mp4'),
      '약속': require('../../studyPage/assets/hands/초대/약속.mp4'),
      '질문하다': require('../../studyPage/assets/hands/초대/질문하다.mp4'),
      '초대하다': require('../../studyPage/assets/hands/초대/초대하다.mp4')
    }
  };

export const videoMap: { [key: string]: string[] } = {
  '가족': ['아버지', '어머니', '딸', '아들', '언니/누나', '형/오빠'],
  '날씨': ['계절', '눈', '다니다', '산', '싫다', '우산'],
  '시간': ['내일', '어제', '언제', '없다', '오늘', '있다'],
  '인사': ['나/저', '너/당신', '반갑다', '안녕하세요', '이름', '인사'],
  '장소': ['고향', '길', '네/맞다', '아파트', '이웃', '집'],
  '초대': ['궁금하다', '배고프다', '배부르다', '약속', '질문하다', '초대하다']
}; 