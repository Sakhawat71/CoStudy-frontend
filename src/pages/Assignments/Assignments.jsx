import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard/AssignmentCard";
import axios from "axios";
import Swal from "sweetalert2";

const Assignments = () => {

    const { loading, user } = useContext(AuthContext);
    const assignments = useLoaderData();
    const [assignmentsState, setAssignments] = useState(assignments);
    const [count, setCount] = useState(0);
    const [itemsParPage, setItemsParPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(0)
    // const [pages, setPages] = useState(0);

    useEffect(() => {
        axios.get('https://online-group-study-server-gold.vercel.app/api/v1/total-assignments')
            .then(res => {
                setCount(res.data.count)
            })
    }, [])

    useEffect(()=>{
        // setCurrentPage(0)
        axios.get(`https://online-group-study-server-gold.vercel.app/assignments?page=${currentPage}&size=${itemsParPage}`)
        .then(res => {
            setAssignments([])
            setAssignments(res.data)
        })
    },[currentPage,itemsParPage])


    const totalPages = Math.ceil(count / itemsParPage);
    const pages = [...Array(totalPages).keys()];





    // prev page
    const handelPrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    // next page
    const handelNextPage = () => {
        if(currentPage < pages.length - 1){
            setCurrentPage(currentPage + 1)
        }
    }

    // items par page
    const handelItemParPage = e => {
        const parPage = parseInt(e.target.value);
        setItemsParPage(parPage)
        setCurrentPage(0)
    }

    // difficulty label
    const handelDifficultyLabel = e => {
        const difficultyLable = e.target.value;
        axios.get(`https://online-group-study-server-gold.vercel.app/api/v1/assignments/${difficultyLable}`)
            .then(res => {
                setAssignments([])
                setAssignments(res.data)
            })
    }

    const handelDeleteAssignment = (id, creatorEmail) => {
        // console.log(id,creatorEmail)
        if (user.email !== creatorEmail) {
            return (
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Your can`t delete others Assignment",
                    showConfirmButton: false,
                    timer: 1500
                })
            )
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://online-group-study-server-gold.vercel.app/assignments/${id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount === 1) {

                            const remaining = assignmentsState?.filter(assignment => assignment._id !== id)
                            setAssignments(remaining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div className="min-h-screen my-10">
            <div>
                {
                    loading &&
                    <span className="flex justify-center mx-auto items-center loading loading-spinner loading-lg my-5"></span>
                }
            </div>
            <div className="md:mb-10 flex justify-end max-w-7xl lg:pr-20">

                <label className="text-blue-700 font-bold">Difficulty : </label>
                <select name="difficulty" onChange={handelDifficultyLabel}>
                    <option value="">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>

            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10">
                {
                    assignmentsState?.map(assignment => <AssignmentCard
                        assignment={assignment}
                        key={assignment._id}
                        handelDeleteAssignment={handelDeleteAssignment}
                    ></AssignmentCard>)
                }
            </div>

            <div className="mx-auto my-10 flex justify-center items-center">
                <button onClick={handelPrevPage} className="join-item btn btn-outline">Prev</button>
                {
                    pages?.map(page => <button
                        className={currentPage === page ? "btn btn-outline bg-blue-600" : "btn btn-outline"}
                        key={page}
                        onClick={() => setCurrentPage(page)}
                    >{page + 1}</button>)
                }
                <button onClick={handelNextPage} className="join-item btn btn-outline">Next</button>

                <div className="ml-2">
                    <label htmlFor="itemParPage">Par Page: </label>
                    <select defaultValue={itemsParPage} name='itemParPage' onChange={handelItemParPage}>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="21">21</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default Assignments;