
# **<span style="color:#79AC78">특강 Review - ChatGPT 활용하기</span>**

## 📋 **<span style="color:#B0D9B1">내용</span>**

### <span style="color:#D0E7D2">LLM</span>
- LLM : Large Language Model
- 앞 문장을 보고 뒤에 올 문장을 확률적으로 계산하는 모델
- LM 훈련
    - supervised model (지도 학습)
        - Input / output 이 주어짐
    - unsupervised model
        - output 이 주어지지 않는건가?
    - [두 학습 방식의 차이점](https://www.ibm.com/blog/supervised-vs-unsupervised-learning/) 참고하여 정리하기 
    
    - 웹에 존재하는 문서들이 모델의 훈련 데이터가 됨
        - 품질이 중요해 위키피디아를 훈련 데이터로 가장 많이 사용
        - 코드는 Github이 훈련용 데이터가 됨
        - unsupervised model
    
    - context window : ? (찾아보고 정리)
    - Word to Vector
        - 언어 모델에 사용되는 Transformer 모델
        단어를 숫자로 변환 후 (one hot encoding) 다시 n차원 벡터로 변환   
        -> 비슷한 단어끼리의 유사성이 적어질 수 있음   
        -> `워드 임베딩`을 잘 하면 비슷한 단어끼리 가까이 위치
        

### <span style="color:#D0E7D2">GPT</span>
- GPT (Generative Pre-trained Transformer)
    - OpenAi에서 만든 초거대 언어 모델
        - 훈련과 예측에 정ㄴ용 하드웨어를 사용
    - 두 가지 모델을 제공
        - Word Completion
        - Code completion
    - 네이버의 초거대 언어 모델(하이퍼 클로바 X)은 Word completion만을 지원

- GPT3 vs. GTP4
     - 175B 파라미터 / 1T 파라미터
     - 텍스트만 인식 / 이미지도 인식
     - GPT외의 경량 모델 -> 메타, 스탠포드, 데이터브릭스 등에서 만드는 중

     - GPT3.5 : 버전에 따라 context window 크기가 조금씩 다름
- API 
    - GPT API
        - Completion
            - Word 
            - Code
        - Fine-tuning
    - Wisperer API
        - Speech to text, text to speech 가능
    - ChatGPT API
- Fine-tuning
    - 이미 만들어진 모델(Pre-trained Mode) 위에 새로운 레이어를 얹히고 (내 domain에 맞는)다른 용도의 데이터로 훈련하는 일
    - 기본 언어 모델 위에 나만의 모델 생성 (버티컬 전용 모델 - ?)

### <span style="color:#D0E7D2">Chat GPT</span>
- GPT를 챗봇 형태로 fine-tuning
    - RLHF : Reinforcement Learning from Human Feedback
        1. 사람 피드백을 기반으로 대화하는 인공지능 모델 학습
        2. 사람이 선호하는 응답을 평가하는 인공지능 모델 학습
        3. 강화학습 기법을 활용해 ChatGPT 학습
    - GPT 지식을 챗봇 형태로 활용 가능 
        - `Prompts 엔지니어링` 탄생 (입력을 주고 어떤식으로 만들어달라고 요구하는 일)

- RLHF 훈련을 위한 오픈소스 탄생
    - 마소 DeepSpeed
    - 데이터브릭스 Dolly

- ChatGPT 4.0
    - Code Interpreter
        - Write code, can execute at jupyter
    - 인터넷 통해 연결, 링크 읽어올 수 있음
    - 이미지 업로드 가능
    - 플러그인 : 여행 리서치가 끝이 아니고 여행 관련 예약으로 연결해줌

### <span style="color:#D0E7D2">Chat GPT 활용법</span>
- 모든 일 업무에 사용해보기
    - Prompt(질문 입력) 잘 만들기
    - 단발성이 아니라 연속적으로 고치면서 발전해나가기

- Prompt의 중요성

- 코딩에 사용해보기 Pair Programming
    - 파라미터 설명해주고 테스트케이스까지 제공해주는게 중요
    - 틀린 탑은 케이스 바탕으로 재작성 요구
    - 내 코드 리뷰 요구
    - 내 코드 주석 추가
    - 내 코드 테스트케이스 요구
- 면접에 사용해보기

- ChatGPT처럼 엄청 뜨는 기술을 바라보는 관점
    - 확실한 방향이 보일 때 까지는
        - 조바심은 ㄴㄴ
        - 발전은 뉴스레터 등을 구독해서 요약본으로만 따라하면서 쫒아가보기
        - ㅐ생활에서 관련 툴을 사용해보기