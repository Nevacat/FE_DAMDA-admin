export interface GetAdminFormList {
  status: number;
  message: string;
  data: AdminForm[];
}

export interface AdminForm {
  questionNumber: number;
  questionOrder: number;
  questionTitle: string;
  questionType: QuestionType;
  questionIdentify: QuestionIdentifier;
  required: boolean;
  page: number;
  placeHolder: string;
  categoryList?: CategoryList[];
  deleted?: boolean;
}

export interface CategoryList {
  id: number;
  category: string;
  price: number;
}

export interface GetLocations {
  status: number;
  message: string;
  data: AddressList;
}

export interface AddressList {
  [key: string]: AdditionalInfo[];
}

export type AdditionalInfo = string;

export interface putCategory {
  questionNumber: number;
  data: string | string[];
}

/**
 * 질문 식별자
 *
 * 이 식별자는 다양한 질문 항목을 식별하는 데 사용됩니다.
 * 각 식별자는 해당하는 질문 항목을 나타냅니다.
 *
 * @remarks
 * - TITLE: 대제목
 * - AFEWSERVINGS: 몇인분
 * - SERVICEDURATION: 서비스 사용시간
 * - ADDRESS: 서비스 주소
 * - SERVICEDATE: 서비스 날짜와 시간
 * - PARKINGAVAILABLE: 주차 가능 여부
 * - APPLICANTNAME: 신청인 이름
 * - APPLICANTCONACTINFO: 신청인 전화번호
 * - LEARNEDROUTE: 알게된 경로
 * - RESERVATIONENTER: 들어가기 위해 필요한 자료
 * - RESERVATIONNOTE: 알아야 할 사항
 * - RESERVATIONREQUEST: 요청사항
 * - SALEAGENT: 판매대행
 * - RECOMMENDEDCODE: 추천인 코드
 * - OPTIONAL: 추가적인 자료
 *
 * @public
 */
export type QuestionIdentifier =
  | 'TITLE'
  | 'AFEWSERVINGS'
  | 'SERVICEDURATION'
  | 'ADDRESS'
  | 'SERVICEDATE'
  | 'PARKINGAVAILABLE'
  | 'APPLICANTNAME'
  | 'APPLICANTCONACTINFO'
  | 'LEARNEDROUTE'
  | 'RESERVATIONENTER'
  | 'RESERVATIONNOTE'
  | 'RESERVATIONREQUEST'
  | 'SALEAGENT'
  | 'RECOMMENDEDCODE'
  | 'OPTIONAL';

/**
 * 질문의 형식 식별자
 *
 * 이 식별자는 질문지의 타입을 나타내는 데 사용됩니다.
 *
 * @remarks
 * - DATE: 날짜
 * - STRING: String 문자
 * - RADIO: Radio Button
 * - SELECT: Select Box
 * - TITLE: 제목을 나타나기 위한 타입
 */
export type QuestionType = 'DATE' | 'STRING' | 'RADIO' | 'SELECT' | 'TITLE' | 'ADDRESS';
