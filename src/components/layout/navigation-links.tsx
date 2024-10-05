// import {
//     ClockIcon,
//     PaperAirplaneIcon,
//     ReceiptRefundIcon,
//     DocumentIcon,
//     PlusCircleIcon,
//     ListBulletIcon,
//     DocumentTextIcon,
//     CommandLineIcon,
//     TicketIcon,
//     HeartIcon,
//     GiftIcon,
//   } from "@heroicons/react/24/outline";
  import { SiTed } from "react-icons/si";
  import { FaUniversity } from "react-icons/fa";
  import { PiTelevision } from "react-icons/pi";
  import { BsCalendarDate } from "react-icons/bs";
  import { GrScheduleNew } from "react-icons/gr";
  import { RiTeamFill } from "react-icons/ri";
  import { FaMicrophoneAlt } from "react-icons/fa";
  import { MdLocalMovies } from "react-icons/md";
  import { PiMicrophoneStageFill } from "react-icons/pi";
  import { FaHandshake } from "react-icons/fa";
  import { FaUsers } from "react-icons/fa";
  import { IoDiamond } from "react-icons/io5";
  import { IoIosPeople } from "react-icons/io";
  import { ImVideoCamera } from "react-icons/im";
  import { FaPhotoVideo } from "react-icons/fa";

  export const navigationLinks = [
    {
      name: "aboutUs",
      subLinks: [
        {
          name: "ted",
          description: "tedSubLabel",
          link: "/#more-info-section",
          color: "red",
          icon: <SiTed size="25px" color="white" />,
        },
        {
          name: "tedx",
          description: "tedxSubtitle",
          link: "/#more-info-section",
          color: "#c40253",
          icon: <FaUniversity size="25px" color="white"/>,
        },
        {
          name: "tedxusf",
          description: "tedxusfSubtitle",
          link: "/#more-info-section",
          color: "#0a75f0",
          icon: <PiTelevision size="25px" color="white" />,
        },
      ],
    },
    {
      name: "event",
      subLinks: [
        {
          name: "dateAndTime",
          description: "dateAndTimeSubtitle",
          link: "/event",
          color: "#be02cc",
          icon: <BsCalendarDate size="25px" color="white" />,
        },
        {
          name: "agenda",
          description: "agendaSubtitle",
          link: "/event",
          color: "#4a18f0",
          icon: <GrScheduleNew size="25px" color="white" />,
        },
      ],
    },
    {
      name: "team",
      link: "/team",
      subLinks: [
        {
          name: "team",
          description: "teamSubtitle",
          link: "/team",
          color: "#01DAFE",
          icon: <IoIosPeople size="25px" color="white" />,
        },
      ],
    },
    {
      name: "speakers",
      link: "/speakers",
      subLinks: [
        {
          name: "speakers",
          description: "speakersSubtitle",
          link: "/speakers",
          color: "#00b536",
          icon: <FaMicrophoneAlt size="25px" color="white" />,
        },
      ],
    },
    {
      name: "media",
      link: "/media",
      subLinks: [
        // {
        //   name: "videos",
        //   description: "videosSubtitle",
        //   link: "/videos",
        //   color: "#fa7705",
        //   icon: <ImVideoCamera size="25px" color="white" />,
        // },
        {
          name: "photos",
          description: "photosSubtitle",
          link: "/photos",
          color: "#0217fa",
          icon: <FaPhotoVideo size="25px" color="white" />,
        },
      ],
    },
    {
      name: "joinUs",
      link: "/joinus",
      subLinks: [
        {
          name: "joinUs",
          description: "joinUsSubtitle",
          link: "/joinus",
          color: "#fa3e3e",
          icon: <IoDiamond size="25px" color="white" />,
        },
        {
          name: "members",
          description: "membersSubtitle",
          link: "/joinus/team",
          color: "#e60082",
          icon: <FaUsers size="25px" color="white" />,
        },
        {
          name: "speakers",
          description: "speakersSubtitle",
          link: "/joinus/speaker",
          color: "#9d00d6",
          icon: <PiMicrophoneStageFill size="25px" color="white" />,
        },
        {
          name: "sponsors",
          description: "sponsorsSubtitle",
          link: "/joinus/sponsor",
          color: "#04c799",
          icon: <FaHandshake size="25px" color="white" />,
        },
      ],
    },
  ];
  