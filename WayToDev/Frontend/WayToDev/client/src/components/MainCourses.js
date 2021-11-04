import React, {useState} from "react";
import "./MainCourses.css";

function MainCourses() {
	const [courses, setCourses] = useState(
		[
			{
				
					_Id: "615c67fae77f6224d9b61825",
					name_course: "JavaRush",
					link: "https://javarush.ru/",
					description: "JavaRush-це  онлайн курс  навчання програмування на Java, який 80% складається з практики",
					avtor: "JavaRush",
					like: null,
					comment: null
					},
					{
					_Id: "615c6bc4186527bab271d01c",
					name_course: "SkillBox",
					link: "https://skillbox.com.ua/course/profession-webdev/?utm_source=google&utm_medium=cpc&utm_campaign=62_profession-webdev_google_cpc_poisk_course_ua_code_gizatullin_10983897787&utm_content=adg_123651518611|ad_499557738655|ph_kwd-869139388245|key_%D0%BA%D1%83%D1%80%D1%81%D0%B8%20%D0%BF%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8E|dev_c|pst_|rgnid_21130|placement_|creative_{creative_name}&utm_term=%D0%BA%D1%83%D1%80%D1%81%D0%B8%20%D0%BF%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8E&gclid=CjwKCAjw7--KBhAMEiwAxfpkWNDjkyAYfLg87e2SecSEqK58ae4aIj63VwBUSj0OjVGgqhPb1ffnlRoCwf4QAvD_BwE",
					description: "Вы с нуля научитесь создавать полноценные сайты и веб-приложения. Освоите HTML, CSS, JavaScript и PHP, познакомитесь с фреймворками и станете востребованным веб-разработчиком. Даже если до этого не программировали.",
					avtor: "SkillBox",
					like: null,
					comment: null
					},
					{
					_Id: "615c6c94186527bab271d01d",
					name_course: "ITEA онлайн",
					link: "https://onlineitea.com.ua/course/programming-basic/?utm_source=adwords&utm_medium=cpc&utm_campaign=op_adwords_kurs_ua&gclid=CjwKCAjw7--KBhAMEiwAxfpkWAInK89SSgmGDBLk2Xb54krJ2sPYNhdEbS1PPCsFvH4sUlg-pduEgBoC058QAvD_BwE",
					description: "Навчання основ програмування з нуля онлайн — це раціональний спосіб познайомитися з різними мовами програмування. І в результаті — обрати свій напрямок в IT.\n\n",
					avtor: "ITEA ",
					like: null,
					comment: null
					},
					{
					_Id: "615c6d78186527bab271d01e",
					name_course: "НЕТОЛОГИЯ",
					link: "https://netology.ru/",
					description: "Курсы, которые помогут освоить востребованную профессию с нуля или изучить новую специализацию",
					avtor: "НЕТОЛОГИЯ",
					like: null,
					comment: null
					},
					{
					_Id: "615c6fc7186527bab271d01f",
					name_course: "Gek Brains",
					link: "https://geekbrains.com.ua/faculty/web?utm_source=google&utm_medium=cpc&utm_campaign=3100_gu-web_google_cpc_poisk_course_ua_code_skillbox_14791058383&utm_content=adg_{gbid}|ad_{ad_id}|ph_{phrase_id}|key_%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8E|dev_{device_type}|pst_{position_type}_{position}|rgnid_{region_id}_{region_name}|placement_{source}|creative_{creative_name}&utm_term=%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8E&gclid=CjwKCAjw7--KBhAMEiwAxfpkWIV5hrsZ9CUXiKhMTQN8_nQCB3ASdmIVaUDwP8XyNR_tZobwT8am4xoC1-EQAvD_BwE",
					description: "Научим веб-разработке с нуля: вы пройдёте путь от создания макетов до оптимизации баз данных и алгоритмов. После обучения получите практический опыт и сможете развивать высоконагруженные проекты.",
					avtor: "Geek Brains",
					like: null,
					comment: null
					},
					{
					_Id: "615c7188186527bab271d020",
					name_course: "HTML Academy",
					link: "https://htmlacademy.ru/courses?admitad_uid=56d4e2e9483c47efb83b020148fa5f50&utm_souce=admitad",
					description: "Если вы хотите разобраться с основами HTML, CSS, JavaScript и PHP — вам сюда.",
					avtor: "HTML Academy",
					like: null,
					comment: null
					},
					{
					_Id: "615c7602186527bab271d021",
					name_course: "Python для начинающих",
					link: "https://gb.ru/courses/112?utm_source=aff&utm_medium=cpa&utm_campaign=aff_cpa_affiliate&utm_content=71927d7b&utm_term=4dd35d21f0452633e3ad0ef610fee796&keyword=stprogphytonfree",
					description: "Чему Вы научитесь\nУстанавливать интерпретатор Python и инструменты разработчика;\nПодключать библиотеку Turtle;\nРаботать с 2D-графикой;\nРеализовывать игровую логику и клиент-серверное взаимодействие.",
					avtor: "Romaniuk Volodymyr",
					"like": null,
					comment: null
					},
					{
					_Id: "615dc302d4262713bbb9da3b",
					name_course: "Prometheus",
					link: "https://courses.prometheus.org.ua/courses/KPI/Programming101/2015_T1/about",
					description: "Під час курсу Ви ознайомитеся з історією персональних комп'ютерів, засвоїте поняття алгоритму та навчитеся створювати нескладні комп'ютерні програми сучасною мовою програмування Python.",
					avtor: "Prometheus",
					like: null,
					comment: null
					},
]
	);
	return (
		<div className="mainCourses">
			<div className="corses">
				<div className="container">
						<div className="courses_header">
							<div className="corses_title">Video courses</div>
							<button className="corses_button">
								All courses [90]
							</button>
						</div>

						<section className = "courses">
							{courses.map((courses)=>(
								<article key={courses._Id}>
									
								</article>	
							))}
						</section>
						
						<div class="video">
							<div class="video_intro">
								<div class="video_text">Name</div>
								<div class="video_amount">12 clases</div>
							</div>
							<div class="video_intro">
								<div class="video_text">Name</div>
								<div class="video_amount">12 clases</div>
							</div>
							<div class="video_intro">
								<div class="video_text">Name</div>
								<div class="video_amount">12 clases</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	);
}

export default MainCourses;
