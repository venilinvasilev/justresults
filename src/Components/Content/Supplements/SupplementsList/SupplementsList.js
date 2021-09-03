import './SupplementsList.scss';

import { useEffect, useRef, useState } from 'react';
import { getAllSupplements } from '../../../../utils/api/data';

import SupplementItem from './SupplementItem';

export default function ShopList() {
    const [supplements, setSupplements] = useState([]);
    const [query, setQuery] = useState('?page=1&limit=3');

    const ignoreQuery = useRef(false);
    const category = useRef('');
    const search = useRef('');
    const page = useRef('');
    const lastPage = useRef('');

    const nextPage = () => {
        page.current++;
        handleQueryChange();
    };
    const prevPage = () => {
        page.current--;
        handleQueryChange();
    };
    const changeCategory = () => {
        page.current = 1;
        handleQueryChange();
    };
    const handleQueryChange = () => {
        ignoreQuery.current = false;
        const queryArr = [];
        queryArr.push(`page=${page.current}`);
        queryArr.push('limit=3');
        if (category.current.value !== '') {
            queryArr.push(`category=${category.current.value}`);
        }
        if (search.current.value !== '') {
            queryArr.push(`search=${search.current.value}`);
        }
        queryArr.join('&') !== '' ? setQuery(`?${queryArr.join('&')}`) : setQuery('');
    };
    useEffect(() => {
        if (ignoreQuery.current) return;
        const fetchData = async () => {
            const { supplements, pages } = await getAllSupplements(query);
            lastPage.current = pages;
            setSupplements(supplements);
            ignoreQuery.current = true;
        };
        fetchData();
    }, [query]);
    return (
        <div className="container">
            <div className="container p-3">
                <div className="row p-4 mb-4 bg-dark justify-content-center">
                    <div className="col-3">
                        <div className="form-group">
                            <label htmlFor="category">Category:</label>
                            <select
                                ref={category}
                                onChange={changeCategory}
                                className="form-control"
                                id="category"
                            >
                                <option value="">All</option>
                                <option value="proteins">Proteins</option>
                                <option value="vitamins">Vitamins/Minerals</option>
                                <option value="pre">Pre-Workouts</option>
                                <option value="post">Post-Workouts</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-group">
                            <label htmlFor="search">Search:</label>
                            <div className="d-flex">
                                <input
                                    onKeyDown={(ev) => ev.code === 'Enter' && handleQueryChange(ev)}
                                    ref={search}
                                    className="form-control rounded-0 search-input"
                                    type="text"
                                    id="search"
                                    placeholder="Search keywords"
                                />
                                <button
                                    onClick={handleQueryChange}
                                    className="btn btn-secondary rounded-0"
                                >
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center text-center pagination">
                    <div className="col-2">
                        {page.current > 1 && (
                            <button onClick={prevPage} className="btn btn-small btn-secondary">
                                Back
                            </button>
                        )}
                    </div>
                    <div className="col-4">
                        <span className="fs-5">
                            Page: {page.current} of {lastPage.current}
                        </span>
                    </div>
                    <div className="col-2">
                        {lastPage.current > page.current && (
                            <button onClick={nextPage} className="btn btn-small btn-secondary">
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="row">
                {supplements.map((supplement) => (
                    <SupplementItem key={supplement._id} supplement={supplement} />
                ))}
            </div>
        </div>
    );
}
