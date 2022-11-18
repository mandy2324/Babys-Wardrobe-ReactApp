import React, { useEffect, useState } from 'react';
import ProdApi from '../projectApi/ProdApi';



const Prod = (props) => {


    return (
        <div className="cotainer" id="prodPage1" style={{ width: "100%", margin: "1rem", padding: "1rem" }}>
            <div class="row">
                <div className="card col-3">
                    <img className="card-img-top img-thumbnail " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-I5Pck3BQvKkLKT7a2uOuRrh0M4mzVyf4Q9uPUTfBycUesUiV9QlpYJFnOqKD-3By8o&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbGrDAlCYzqVUrELKhtUoH-XpksrJDP97og&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUEIsmHBzgu6H1yZ86fpBB2gmq4Y2cC82Zw&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_g6bqo5__ejBgd2uvPg3rZSpQh0IT3xPnZg&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpyX5wUTGIfnpy4jIO1dsJqkaaG5Q62R43g&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiVdThxW1ogBKQPzHlWuDBsIljiC5oOu34vQQMMuLUGgC2BPkXozhTjxSVBjHz_shMlE&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKcxzXgPVHf8PDNXO_i4FOA2T2Gt8kfs5LA&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>


                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yFrhec4TdNZqlI_TnscNFX9QzP_mCIkm4OTEW6FntH3-34YLpToWzH8HtCneX-tTr0c&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>


                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvrIU1f5sLlXVfOCVA8ynyqCwvJVUGWyEgLw&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfROWrb5m115_dhrrVgv2Sc7vcFE_GDovzzg&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCLS5Kz9fa1OPQYasB_fPiZII9GECAWAsLQ&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ru_AxUG1qgXGH9zqG_831GUOvzHHd702_YQtZ-btzSgz392PDzSYR67eW2OknIPO-OI&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Mv1p3gZLMN9JitZiWlGlZW-vl7_7Nl5Q6A&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtgAumN2R9qjjxxI_7eSPemvp--biFAVl0Q&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJ9Z0-58jhjEmJo5HixzofvaGrj0GeolVsA&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>


                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOQGcUypBEyMq4BO4r-mz0CO6KX5GkZ_Azw&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStE2JcTW8KhSkf79AUVW95-jlUMqHrhF4Yyw&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>


                <div className="card col-3">
                    <img className="card-img-top img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYSDG1t6NUSulnvCXje5On0nesWmjUYuVxz58U5hcnGNRQwgUt2QURHhD5k9ksXtuIvE&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title  text-center">Coming Soon To Our collection</p>
                    </div>
                </div>

            </div>
        </div>


    );


};
export default Prod;