export enum ServiceState {
  matching = 'matching', // 매칭중
  wating = 'wating', // 매칭수락대기
  confirmation = 'confirmation', // 서비스예약확정
  completed = 'completed', // 서비스완료
  cancellation = 'cancellation', // 예약취소
}
