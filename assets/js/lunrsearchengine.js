
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Problem Solver | Value Creator | Big Data| Hadoop | Data Analytics | ML | AI Platform | K8S | Anthos",
    "body": "EmailLinkedInStackoverflowMediumGitHubAccredibleQwiklabsAcclaim "
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                       One-Stop Azure Cert Guide for a GCP Professional: Microsoft Azure Certification DP-200: Implementing an Azure Data Solution                                                 1 2 3 4 5                                              :               As a Technical Architect at MediaAgility, I refined my approach to designing new customer solutions for large enterprises, and I got more inclined to learning,. . . :                                                                                                                                                                       Anil Khichar                                04 Mar 2020                                                                                                                                                                                                                                                                                                                  My 6X Google Cloud Certification Journey                                                 1 2 3 4 5                                              :               As a Senior Technical Architect at MediaAgility, I have over a decade of deep technical and procedural knowledge in IT, data science, analytics, AI, and. . . :                                                                                                                                                                       Anil Khichar                                15 Nov 2019                                                                                                                      All Stories:                                                                                                     GCP Organization Node Setup (free cloud identity)                         1 2 3 4 5                      :       Problem Statement: An organization node is available for G Suite and Cloud Identity customers. There is a lot of content about GCP org node but still, it’s not clear if. . . :                                                                               Anil Khichar                12 Oct 2020                                                                                                                                     Now Google BigQuery is truly enterprise-ready DW (DML without limits; Integer range partitioning)              :       I have been using BigQuery for a couple of years and designing/migrating enterprise data warehouses but the new announcement on limitless DML inspired me to write about its beauty. :                                                                               Anil Khichar                05 Mar 2020                                            "
    }, {
    "id": 4,
    "url": "/videos",
    "title": "Youtube Videos",
    "body": ""
    }, {
    "id": 5,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "/GCP-Organization-Node-Setup-free-cloud-identity/",
    "title": "GCP Organization Node Setup (free cloud identity)",
    "body": "2020/10/12 - Problem Statement::  An organization node is available for G Suite and Cloud Identity customers. There is a lot of content about GCP org node but still, it’s not clear if a customer can start leveraging Org Node advantage without being a GSuite customer. It’s mentioned: You can use a free Cloud Identity account to create an Organization resource. Cloud Identity Free edition includes core identity and endpoint management services. It provides free, managed Google Accounts to users who don’t need G Suite Services, such as Gmail or Google Drive. You can use Cloud Identity accounts with other Google services, such as Google Cloud Platform (GCP), Chrome, Android enterprise, and a large catalog of third-party applications. Upgrade your feature set by signing up for the Cloud Identity Premium edition. Cloud Identity is Free as well as Paid. GCP customers who don’t want to move to GSuite but want to use Google authentication/identity for GCP login can subscribe to Cloud Identity for free.  But there is no free edition of cloud identity. Am I missing something? The ideal structure of an organization: Everyone wants to utilize this structure but sometimes customers feel shy to go with the GSuite route. References: cloud-platform-resource-hierarchy, best-practices-for-enterprise-organizations  Solution: Free cloud identity details: Option A (If you already have a GCP project and want to connect this project with an org node):              Option B (Setup Org node and then start migrating/connecting existing GCP projects): Steps:  Free Cloud Identity Setup: https://gsuite. google. com/signup/gcpidentity Verify domain ownership: https://support. google. com/cloudidentity/answer/7331243?hl=en Continue with GCP Console GCP free account setup/Billing setup Folder management Organization Policy OverviewI hope this post will help in setting up a strong foundation pillar on GCP. "
    }, {
    "id": 7,
    "url": "/Now-Google-BigQuery-is-truly-enterprise-ready-DW-DML-without-limits-Integer-range-partitioning/",
    "title": "Now Google BigQuery is truly enterprise-ready DW (DML without limits; Integer range partitioning)",
    "body": "2020/03/05 - I have been using BigQuery for a couple of years and designing/migrating enterprise data warehouses but the new announcement on limitless DML inspired me to write about its beauty. I do have strong hands-on experience with on-prem traditional data warehouse &amp; data warehousing across cloud providers (Redshift, SQL Data Warehouse a. k. a. Synapse). I always considered Google BigQuery as the next generation DW but following two nonexistence bothering me all the time:  Limited DML operations: It’s limitless now since Feb 26, 2020 announcement.  Date only partition: It used to support Date &amp; Timestamp(it is an illusion, practically it’s also a date partition). Now BigQuery also supports tables partitioned on an integer column as well. I hope in the near future there will be more partitioning options like the oracle. DML was always a struggle while migrating data from traditional enterprise data warehouses and especially dealing with the CDC(change data capture). In my recent Oracle EDW migration to BigQuery, managing update/delete on the new CDC was a big challenge. Top 10 BigQuery features which I do consider it is the next generation EDW:  Quick setup &amp; the most cost-effective DW Fully managed and server-less Scales on-demand from gigabytes to petabytes Seamless access due to data replication so the data is always available Automatic snapshots and data backup reduces worries about unexpected data changes Encrypted, durable, and highly available Built-in machine learning for predictive analytics In-memory BI Engine for blazing-fast reporting            This is why it’s the leader in DW 9. This is how BigQuery removes the traditional data warehousing barriers:             This is why it’s the leader in DW 10. Real-time insights: Insert up to 100,000 rows of data per second and analyze business events as they unfold. Read more about BigQuery here. Happy coding &amp; keep spreading happiness and kindness :) "
    }, {
    "id": 8,
    "url": "/One-Stop-Azure-Cert-Guide-for-a-GCP-Professional-Microsoft-Azure-Certification-DP-200/",
    "title": "One-Stop Azure Cert Guide for a GCP Professional: Microsoft Azure Certification DP-200: Implementing an Azure Data Solution",
    "body": "2020/03/04 - As a Technical Architect at MediaAgility, I refined my approach to designing new customer solutions for large enterprises, and I got more inclined to learning, not just studying and memorizing. Why I chose Azure Learning: In the last two years, I designed GCP solutions for almost five enterprises and the common fact was, every enterprise was using/(willing to use) a hybrid cloud strategy regardless of their industry &amp; service. And the compelling reason was no-vendor locking &amp; utilize the best services across cloud providers and stay in the front line of their competition. I am extensively working on GCP but at the same time taking care of Azure &amp; AWS intersections. After completing My 6X Google Cloud Certification Journey, I decided to start with Azure to gain more in-depth knowledge. DP-200 Journey:: Brief: At the start of 2019, Microsoft released two Azure Data exams: Implementing an Azure Data Solution (DP-200) and Designing an Azure Data Solution (DP-201). If you pass both of these exams, you become a Microsoft Certified Azure Data Engineer Associate.             At the end of 2019 I started learning Azure and on January 4th, 2020, I got recognition as a Microsoft Certified: Azure Data Engineer Associate. !! Steps::  Reverse engineering Google Cloud for Azure professionals: This guide compares Google Cloud with Azure and highlights the similarities and differences between the two. In addition, the guide provides quick-reference mappings of Azure products, concepts, and terminology to the corresponding products, concepts, and terminology on Google Cloud.  Gold content at Microsoft learning path: In my opinion, this is the best learning resource of all. The estimated total time for all of the following modules was around 30 hours. However, I ended up around 100 hours to cover hands-on experiments.  Azure for the Data Engineer Store data in Azure Work with relational data in Azure Work with NoSQL data in Azure Cosmos DB Large Scale Data Processing with Azure Data Lake Storage Gen2 Implement a Data Streaming Solution with Azure Streaming Analytics Implement a Data Warehouse with Azure Synapse Analytics Perform data engineering with Azure Databricks Extract knowledge and insights from your data with Azure Databricks            My personalized bookmark list, out of this long learning path :) 3. Notes: I took some useful notes in Evernote which I need to consolidate and share in a public Git Repo. If anyone is interested, then please write in the comments below or find me on LinkedIn. 4. Must-read content: This was my revision list which can make you the winner if you were about to lose the nearline race. If you are well prepared and wants to cover last day content, here it is:  4. a. Implement Data Storage Solutions:  CosmosDB  Understand CosmosDB use cases.  It’s really important to know the decision criteria for CosmosDB APIs.  Deep dive into Cosmos DB partitioning and learn about query performance tuning like deciding the partitioning key, creating lookup collection, etc.  Perceive the intended meaning of Cosmos DB request units(RUs) so that you can save the cost and estimate the amount of RU for a particular workload.  Implement a lambda architecture on the Azure platform. Get a clear understanding of which service to use while following this approach like Apache Spark vs Apache Hadoop etc.  Understand HDFS architecture and get a clear understanding and use cases about Primary, Secondary, NameNode &amp; DataNode.  Storage  Manage the Azure Blob storage lifecycle. Experiment the mentioned example in this post about applying a lifecycle policy. hands-on Learn about Access control in Azure Data Lake Storage Gen2. Pay special attention to Azure AD setup while applying ACLs. hands-on Configure Azure Storage firewalls and virtual networks. hands-on Azure SQL Server &amp; SQL Server Data Warehouse (Synapse Analytics)  Which SQL option should I choose? Export an Azure SQL database to a BACPAC file. hands-on Learn about how to secure sensitive data in a SQL database with database encryption by using the Always Encrypted wizard. hands-on Experience Azure SQL Database Advanced Threat Protection features &amp; steps to enable it. hands-on Experiment and enable TDE (Transparent Data Encryption) and keep a note on the steps: Formula(memory trick): MCED — Master Key, Certificate, Encryption &amp; Apply encryption on the DB. hands-on Do an experiment using Powershell &amp; Azure cloud shell. hands-on IP firewall rules. hands-on Read about dynamic data masking for Azure SQL Database and Azure Synapse Analytics. Give special attention to the in-built masking functions &amp; their appropriate usages (Default, Credit Card, Email, Random Number, Custom Text) Polybase: Please execute this hands-on experiment multiple times to load the data from ADLS into WH and memorize all the steps in the correct sequence. Formula(Memory trick): MCSFTL — Master, Credential, Source, File, Table, Load(CTAS). Load New York Taxicab dataset hands-on DW performance benchmarking: This example demonstrates DW performance benchmarking and concluded to utilize a methodology of CTAS and partition switching in lieu of UPDATE and DELETE operations wherever possible. Get a full understanding of this fundamental approach. hands-on 4. b. Manage and develop data processing:  Azure Data Factory  Understand the difference between all the available Integration runtime. Pay special attention to the self-hosted integration runtime.  Azure Data Factory Copy Activity: Find out schema mapping ways between source &amp; sink. hands-on Storage &amp; HDInsight  Get in-depth knowledge of using Azure Data Lake Storage Gen2 for big data requirements. Also, learn about different Hadoop tools discussed in this article.  Choose the correct HDInsight Configuration to build open-source analytics solutions. Give special attention to the use cases and get a better understanding of when to use Storm vs Spark etc.  Azure Databricks  Learn about the technology choices for batch processing and what is the decision criteria to choose one over the others.  ETL using Azure Databricks. Special attention to “Load data into Azure SQL Data Warehouse” hands-on Experiment on different cluster configurations. hands-on Azure Stream Analytics  Window functions: You must know the practical difference between all the stream analytics windowing functions &amp; their usage (Tumbling, Hopping, Sliding &amp; Session windows). hands-on Learn how to use lookup data in the Azure Stream Analytics in a data streaming pipeline. hands-on Azure Stream Analytics on IoT Edge 4. c. Monitor and optimize data solutions:  Understand the SQL auditing features &amp; do a hand-on experiment on who/when &amp; what got accessed from the Azure SQL DB &amp; WH? hands-on Learn about enabling SQL server automatic tuning &amp; give special attention towards the inheritance with tuning options like Force Plan, Create Index &amp; Drop Index. hands-on Read &amp; understand In-Memory technologies that improve performance without increasing the database service tier. hands-on Understand the materialized view design pattern and think about its uses to boost a slow-performing SQL query. hands-on Learn how to enable and configure logging of diagnostics telemetry for Azure SQL databases. Pay special attention to the metric storage options like Azure SQL Analytics, Azure Event Hubs &amp; Azure Storage. hands-on Imbibe ADLS Gen2 performance optimization techniques. Understand file sizing &amp; data organization into folders.  Discover Azure data factory monitoring using Azure monitor and think about use cases like last quarter log analytics and find out different actionable trends. hands-on Learn about on-premises HA data gateway cluster to avoid single points of failure and to load balance traffic across gateways in a cluster.  Understand the use of Azure Log Analytics to monitor HDInsight clusters. Pay special attention to “Install HDInsight cluster management solutions”. hands-on… Core mantra has to be: Never target for certification, rather understand the platform &amp; technology, because this will help us to design better solutions for our customers and perform our work in a qualitative manner. These are the perks of being a lifelong learner. In this post, I shared all the resources that I found and used. Always check the latest official information from Microsoft before your exam. Prepare well and all the best for the exam! "
    }, {
    "id": 9,
    "url": "/My-6X-Google-Cloud-Certification-Journey/",
    "title": "My 6X Google Cloud Certification Journey",
    "body": "2019/11/15 - As a Senior Technical Architect at MediaAgility, I have over a decade of deep technical and procedural knowledge in IT, data science, analytics, AI, and Google Cloud. I became 6X Google Cloud certified in slightly over a year.  These were the first exams I sat down to study for since my graduation in 2009. My initial aim wasn’t to get these many certifications, but when the benefits started to show, I realized that these are not just about getting these 6 certificates from Google. I could see that my thinking and approach got more methodical, I started to work on GCP projects at my company, I refined my approach to designing new customer solutions for large enterprises, and I got more inclined to learning, not just studying and memorizing.             here I am :)  If I have to summarize my experience of passing each of the Google Cloud certification exam in one line, then it has to be what Mahatma Gandhi said: “Live as if you were to die tomorrow, learn as if you were to live forever”. My recommendation to my fellow developers will be to appear for these Google certification exams because they have the potential to improve our work and the impact it has on the projects we consult on. Through this post, I will try to handover all the learning and tips from my exam preparation days. For curriculum content, I sticked to Coursera, QwikLabs, and Google documentation and that was enough. Further, my common preparation pattern across all 6 certs was as follows::  Read the Google Cloud certification website thoroughly. It has all the information to help us prepare. For instance, for the Associate certification (and also for all other certifications), you will find the exam overview, guide, and practice exams. You will also find additional resources under the ‘exam overview’ section. I will suggest going through the ‘exam overview’ and the ‘exam guide’ thoroughly to know the topics in the curriculum. This will help to set realistic expectations and draft a preparation strategy. There is also a curated list of GCP resources by GitHub, that you might want to refer.  Coursera, Linux Academy, and Cloud Guru — all offer course material for exam preparation. I studied from Coursera. If you choose Coursera, you must subscribe to Coursera for Google Cloud and choose the specialization corresponding to your target exam. Here is a list of the Coursera specialization/courses against the certifications:Certification Name | Specialization Name Professional Cloud Architect | Architecting with Google Cloud Platform Specialization and Preparing for the Google Cloud Professional Cloud Architect Examination Professional Data Engineer | Data Engineering on Google Cloud Platform Specialization and Preparing for the Google Cloud Professional Data Engineer Examination Professional Cloud Developer | Developing Applications with Google Cloud Platform Professional Cloud Security Engineer | Security in Google Cloud Platform and Google Cloud Platform Fundamentals: Core Infrastructure Professional Cloud Network Engineer | Networking in Google Cloud Platform Specialization Associate Cloud Engineer | Architecting with Google Cloud Platform Specialization This will be my suggestion for studying from Coursera:  Watch every video. I preferred playing the videos at 1. 5x speed and after a couple of them, I went for 1. 75x speed. I did it since the topics were known to me and most of them needed just brushing up.  PRO TIP: If you find something interesting, take screenshots using awesome-screenshot chrome plugin. I recommend this plugin since it creates a Google Drive folder where these snaps get saved automatically. These were my personal notes that I used for revision.  Answer every questionnaire that pops after the modules with complete dedication as if you were appearing for the exams.  Perform QwikLabs’s practice lab religiously. These will come at the end of every module. QwikLabs provides real cloud environments that help developers and IT professionals learn cloud platforms and software.  My personal goal was always to finish a one-week Coursera module in a single day. That was a goal that worked for me, you need not be necessarily doing it. Consistency is the key and it eventually leads to speed. Speed shouldn’t be the primary preparation strategy. 3. Check your readiness: You can take mock practice exams to evaluate your preparation. The Google Cloud certification site has all the links to the practice exams and resources — this is a directory for the exams, it has all the required information. A score of anything equal to or more than 17 out of 20 is a good score. Please don’t forget to analyze your answers and the explanation that is displayed on the result screen. Read GCP documentation links that are suggested after the exam. This is the last step before you register and schedule your exam.  However, if your score is below 17, you will need more analysis and work. Note down the wrong answers and prepare a list of topics that are pulling your score down. Carefully read and understand every GCP documentation link that is provided to you on the result screen. Do more hands-on exercises on certification-specific QwikLabs quests (for instance, for Cloud Architect exam, this is the quest). Focus on your weak areas more. Then once again, come back and check your readiness. Repeat this till your score is more than 17. On the exam day, revise your own notes from Google Drive. Prepare yourself mentally to take the challenge head-on and don’t get flustered. … Even though my personal goal was to score 17 or above, I still strongly believe these exams are not the ultimate goal. These are means to the ultimate goal of becoming better at what we like to do. Core mantra has to be: Never target for certification, rather understand the platform &amp; technology, because this will help us to design better solutions for our customers and perform our work in a qualitative manner. These are the perks of being a lifelong learner. Prepare well and all the best for the exam! "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});