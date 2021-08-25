import './SupplementsList.scss';
import SupplementItem from './SupplementItem';
import { useEffect, useRef, useState } from 'react';
import { getAllSupplements } from '../../../../utils/api/data';
export default function ShopList() {
    const [supplements, setSupplements] = useState([]);
    const [query, setQuery] = useState('?page=1&limit=3');
    const queryControls = {
        category: useRef(''),
        search: useRef(''),
        page: useRef(1),
        lastPage: useRef(1),
    }
    const nextPage = () => {
        queryControls.page.current++;
        handleQueryChange();
    }
    const prevPage = () => {
        queryControls.page.current--;
        handleQueryChange();
    }
    const changeCategory = () => {
        queryControls.page.current = 1;
        handleQueryChange();
    }
    const handleQueryChange = () => {
        const queryArr = [];
        queryArr.push(`page=${queryControls.page.current}`);
        queryArr.push('limit=3');
        if (queryControls.category.current.value !== '') {
            queryArr.push(`category=${queryControls.category.current.value}`);
        }
        if (queryControls.search.current.value !== '') {
            queryArr.push(`search=${queryControls.search.current.value}`);
        }
        queryArr.join('&') !== '' ? setQuery(`?${queryArr.join('&')}`) : setQuery('');
    }
    useEffect(() => {
        const fetchData = async () => {
            const { supplements, pages } = await getAllSupplements(query);
            queryControls.lastPage.current = pages;
            setSupplements(supplements);
        }
        fetchData();
    }, [query]);
    return (
        <div className="container">
            <div className="container p-3">
                <div className="row p-4 mb-4 bg-dark justify-content-center">
                    <div className="col-3">
                        <div className="form-group">
                            <label htmlFor="category">Category:</label>
                            <select ref={queryControls.category} onChange={changeCategory} className="form-control" id="category">
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
                                <input onKeyDown={(ev) => ev.code === 'Enter' && handleQueryChange(ev)} ref={queryControls.search} className="form-control rounded-0 search-input" type="text" class="form-control" id="search" placeholder="Search keywords" />
                                <button onClick={handleQueryChange} className="btn btn-secondary rounded-0"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="d-flex justify-content-center text-center pagination">
                    <div className="col-2">
                        {queryControls.page.current > 1 && <button onClick={prevPage} className="btn btn-small btn-secondary">Back</button>}
                    </div>
                    <div className="col-4">
                        <span className="fs-5">Page: {queryControls.page.current} of {queryControls.lastPage.current}</span>
                    </div>
                    <div className="col-2">
                        {queryControls.lastPage.current > queryControls.page.current && <button onClick={nextPage} className="btn btn-small btn-secondary">Next</button>}
                    </div>
                </div>
            </div>

            <div className="row">
                {supplements.map((supplement) => <SupplementItem key={supplement._id} supplement={supplement} />)}
            </div>
        </div>
    );
}