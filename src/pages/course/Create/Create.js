import classNames from 'classnames/bind';
import { useState } from 'react';
import Editor from '~/components/Editor';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Create() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thêm khóa học" />
                </div>
            </div>

            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-6">
                            <div className="card-header" style={{ backgroundColor: '#f4f6f9' }}>
                                <h2 className="card-title mb-0">Thông tin khóa học</h2>
                            </div>
                        </div>

                        <form
                            method="POST"
                            action="/thenhanhcp/softcard"
                            acceptCharset="UTF-8"
                            encType="multipart/form-data"
                        >
                            <input
                                name="_token"
                                type="hidden"
                                defaultValue="YFtpMspUfhyWYfVYQlbbyJCVtWAPf98inSRasZEN"
                            />
                            <div className="card-body row">
                                <div className="col-md-6 col-md-offset-3">
                                    <div className="card">
                                        <div className="card-body row">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="name">Tên sản phẩm:</label>
                                                <input
                                                    name="fullName"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="fullName"
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="slug">Đường dẫn SEO:</label>
                                                <input
                                                    name="slug"
                                                    type="text"
                                                    className="form-control"
                                                    id="slug"
                                                    placeholder="Đường dẫn SEO"
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="service_code">SERVICE CODE (Mã sản phẩm):</label>
                                                <input
                                                    name="service_code"
                                                    type="text"
                                                    className="form-control"
                                                    id="service_code"
                                                    placeholder="ví dụ: GARENA"
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="cat_id">Danh mục:</label>
                                                <select className="form-control" name="cat_id">
                                                    <option value={1}>Thẻ điện thoại</option>
                                                    <option value={2}>Thẻ game</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="item_value">Mệnh giá:</label>
                                                <input
                                                    name="item_value"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Cách nhau bởi dấu phẩy"
                                                    defaultValue="10000,20000,30000,50000,100000,200000,300000,500000,1000000"
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="country">Quốc gia:</label>
                                                <select className="form-control" name="country">
                                                    <option value="AU">Australia</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="CN">China</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                    <option value="JP">Japan</option>
                                                    <option value="RU">Russia</option>
                                                    <option value="KR">South Korea</option>
                                                    <option value="TW">Taiwan</option>
                                                    <option value="TH">Thailand</option>
                                                    <option value="GB">United Kingdom</option>
                                                    <option value="US">United States</option>
                                                    <option value="VN">Vietnam</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="AS">American Samoa</option>
                                                    <option value="AD">Andorra</option>
                                                    <option value="AO">Angola</option>
                                                    <option value="AI">Anguilla</option>
                                                    <option value="AQ">Antarctica</option>
                                                    <option value="AG">Antigua and Barbuda</option>
                                                    <option value="AR">Argentina</option>
                                                    <option value="AM">Armenia</option>
                                                    <option value="AW">Aruba</option>
                                                    <option value="AT">Austria</option>
                                                    <option value="AZ">Azerbaijan</option>
                                                    <option value="BS">Bahamas</option>
                                                    <option value="BH">Bahrain</option>
                                                    <option value="BD">Bangladesh</option>
                                                    <option value="BB">Barbados</option>
                                                    <option value="BY">Belarus</option>
                                                    <option value="BE">Belgium</option>
                                                    <option value="BZ">Belize</option>
                                                    <option value="BJ">Benin</option>
                                                    <option value="BM">Bermuda</option>
                                                    <option value="BT">Bhutan</option>
                                                    <option value="BO">Bolivia</option>
                                                    <option value="BA">Bosnia and Herzegovina</option>
                                                    <option value="BW">Botswana</option>
                                                    <option value="BR">Brazil</option>
                                                    <option value="IO">British Indian Ocean Territory</option>
                                                    <option value="VG">British Virgin Islands</option>
                                                    <option value="BN">Brunei</option>
                                                    <option value="BG">Bulgaria</option>
                                                    <option value="BF">Burkina Faso</option>
                                                    <option value="BI">Burundi</option>
                                                    <option value="KH">Cambodia</option>
                                                    <option value="CM">Cameroon</option>
                                                    <option value="CV">Cape Verde</option>
                                                    <option value="KY">Cayman Islands</option>
                                                    <option value="CF">Central African Republic</option>
                                                    <option value="TD">Chad</option>
                                                    <option value="CL">Chile</option>
                                                    <option value="CX">Christmas Island</option>
                                                    <option value="CC">Cocos Islands</option>
                                                    <option value="CO">Colombia</option>
                                                    <option value="KM">Comoros</option>
                                                    <option value="CK">Cook Islands</option>
                                                    <option value="CR">Costa Rica</option>
                                                    <option value="HR">Croatia</option>
                                                    <option value="CU">Cuba</option>
                                                    <option value="CW">Curacao</option>
                                                    <option value="CY">Cyprus</option>
                                                    <option value="CZ">Czech Republic</option>
                                                    <option value="CD">Democratic Republic of the Congo</option>
                                                    <option value="DK">Denmark</option>
                                                    <option value="DJ">Djibouti</option>
                                                    <option value="DM">Dominica</option>
                                                    <option value="DO">Dominican Republic</option>
                                                    <option value="TL">East Timor</option>
                                                    <option value="EC">Ecuador</option>
                                                    <option value="EG">Egypt</option>
                                                    <option value="SV">El Salvador</option>
                                                    <option value="GQ">Equatorial Guinea</option>
                                                    <option value="ER">Eritrea</option>
                                                    <option value="EE">Estonia</option>
                                                    <option value="ET">Ethiopia</option>
                                                    <option value="FK">Falkland Islands</option>
                                                    <option value="FO">Faroe Islands</option>
                                                    <option value="FJ">Fiji</option>
                                                    <option value="FI">Finland</option>
                                                    <option value="PF">French Polynesia</option>
                                                    <option value="GA">Gabon</option>
                                                    <option value="GM">Gambia</option>
                                                    <option value="GE">Georgia</option>
                                                    <option value="GH">Ghana</option>
                                                    <option value="GI">Gibraltar</option>
                                                    <option value="GR">Greece</option>
                                                    <option value="GL">Greenland</option>
                                                    <option value="GD">Grenada</option>
                                                    <option value="GU">Guam</option>
                                                    <option value="GT">Guatemala</option>
                                                    <option value="GG">Guernsey</option>
                                                    <option value="GN">Guinea</option>
                                                    <option value="GW">Guinea-Bissau</option>
                                                    <option value="GY">Guyana</option>
                                                    <option value="HT">Haiti</option>
                                                    <option value="HN">Honduras</option>
                                                    <option value="HK">Hong Kong</option>
                                                    <option value="HU">Hungary</option>
                                                    <option value="IS">Iceland</option>
                                                    <option value="IN">India</option>
                                                    <option value="ID">Indonesia</option>
                                                    <option value="IR">Iran</option>
                                                    <option value="IQ">Iraq</option>
                                                    <option value="IE">Ireland</option>
                                                    <option value="IM">Isle of Man</option>
                                                    <option value="IL">Israel</option>
                                                    <option value="IT">Italy</option>
                                                    <option value="CI">Ivory Coast</option>
                                                    <option value="JM">Jamaica</option>
                                                    <option value="JE">Jersey</option>
                                                    <option value="JO">Jordan</option>
                                                    <option value="KZ">Kazakhstan</option>
                                                    <option value="KE">Kenya</option>
                                                    <option value="KI">Kiribati</option>
                                                    <option value="XK">Kosovo</option>
                                                    <option value="KW">Kuwait</option>
                                                    <option value="KG">Kyrgyzstan</option>
                                                    <option value="LA">Laos</option>
                                                    <option value="LV">Latvia</option>
                                                    <option value="LB">Lebanon</option>
                                                    <option value="LS">Lesotho</option>
                                                    <option value="LR">Liberia</option>
                                                    <option value="LY">Libya</option>
                                                    <option value="LI">Liechtenstein</option>
                                                    <option value="LT">Lithuania</option>
                                                    <option value="LU">Luxembourg</option>
                                                    <option value="MO">Macao</option>
                                                    <option value="MK">Macedonia</option>
                                                    <option value="MG">Madagascar</option>
                                                    <option value="MW">Malawi</option>
                                                    <option value="MY">Malaysia</option>
                                                    <option value="MV">Maldives</option>
                                                    <option value="ML">Mali</option>
                                                    <option value="MT">Malta</option>
                                                    <option value="MH">Marshall Islands</option>
                                                    <option value="MR">Mauritania</option>
                                                    <option value="MU">Mauritius</option>
                                                    <option value="YT">Mayotte</option>
                                                    <option value="MX">Mexico</option>
                                                    <option value="FM">Micronesia</option>
                                                    <option value="MD">Moldova</option>
                                                    <option value="MC">Monaco</option>
                                                    <option value="MN">Mongolia</option>
                                                    <option value="ME">Montenegro</option>
                                                    <option value="MS">Montserrat</option>
                                                    <option value="MA">Morocco</option>
                                                    <option value="MZ">Mozambique</option>
                                                    <option value="MM">Myanmar</option>
                                                    <option value="NA">Namibia</option>
                                                    <option value="NR">Nauru</option>
                                                    <option value="NP">Nepal</option>
                                                    <option value="NL">Netherlands</option>
                                                    <option value="AN">Netherlands Antilles</option>
                                                    <option value="NC">New Caledonia</option>
                                                    <option value="NZ">New Zealand</option>
                                                    <option value="NI">Nicaragua</option>
                                                    <option value="NE">Niger</option>
                                                    <option value="NG">Nigeria</option>
                                                    <option value="NU">Niue</option>
                                                    <option value="KP">North Korea</option>
                                                    <option value="MP">Northern Mariana Islands</option>
                                                    <option value="NO">Norway</option>
                                                    <option value="OM">Oman</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="PW">Palau</option>
                                                    <option value="PS">Palestine</option>
                                                    <option value="PA">Panama</option>
                                                    <option value="PG">Papua New Guinea</option>
                                                    <option value="PY">Paraguay</option>
                                                    <option value="PE">Peru</option>
                                                    <option value="PH">Philippines</option>
                                                    <option value="PN">Pitcairn</option>
                                                    <option value="PL">Poland</option>
                                                    <option value="PT">Portugal</option>
                                                    <option value="PR">Puerto Rico</option>
                                                    <option value="QA">Qatar</option>
                                                    <option value="CG">Republic of the Congo</option>
                                                    <option value="RE">Reunion</option>
                                                    <option value="RO">Romania</option>
                                                    <option value="RW">Rwanda</option>
                                                    <option value="BL">Saint Barthelemy</option>
                                                    <option value="SH">Saint Helena</option>
                                                    <option value="KN">Saint Kitts and Nevis</option>
                                                    <option value="LC">Saint Lucia</option>
                                                    <option value="MF">Saint Martin</option>
                                                    <option value="PM">Saint Pierre and Miquelon</option>
                                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                                    <option value="WS">Samoa</option>
                                                    <option value="SM">San Marino</option>
                                                    <option value="ST">Sao Tome and Principe</option>
                                                    <option value="SA">Saudi Arabia</option>
                                                    <option value="SN">Senegal</option>
                                                    <option value="RS">Serbia</option>
                                                    <option value="SC">Seychelles</option>
                                                    <option value="SL">Sierra Leone</option>
                                                    <option value="SG">Singapore</option>
                                                    <option value="SX">Sint Maarten</option>
                                                    <option value="SK">Slovakia</option>
                                                    <option value="SI">Slovenia</option>
                                                    <option value="SB">Solomon Islands</option>
                                                    <option value="SO">Somalia</option>
                                                    <option value="ZA">South Africa</option>
                                                    <option value="SS">South Sudan</option>
                                                    <option value="ES">Spain</option>
                                                    <option value="LK">Sri Lanka</option>
                                                    <option value="SD">Sudan</option>
                                                    <option value="SR">Suriname</option>
                                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                                    <option value="SZ">Swaziland</option>
                                                    <option value="SE">Sweden</option>
                                                    <option value="CH">Switzerland</option>
                                                    <option value="SY">Syria</option>
                                                    <option value="TJ">Tajikistan</option>
                                                    <option value="TZ">Tanzania</option>
                                                    <option value="TG">Togo</option>
                                                    <option value="TK">Tokelau</option>
                                                    <option value="TO">Tonga</option>
                                                    <option value="TT">Trinidad and Tobago</option>
                                                    <option value="TN">Tunisia</option>
                                                    <option value="TR">Turkey</option>
                                                    <option value="TM">Turkmenistan</option>
                                                    <option value="TC">Turks and Caicos Islands</option>
                                                    <option value="TV">Tuvalu</option>
                                                    <option value="VI">U.S. Virgin Islands</option>
                                                    <option value="UG">Uganda</option>
                                                    <option value="UA">Ukraine</option>
                                                    <option value="AE">United Arab Emirates</option>
                                                    <option value="UY">Uruguay</option>
                                                    <option value="UZ">Uzbekistan</option>
                                                    <option value="VU">Vanuatu</option>
                                                    <option value="VA">Vatican</option>
                                                    <option value="VE">Venezuela</option>
                                                    <option value="WF">Wallis and Futuna</option>
                                                    <option value="EH">Western Sahara</option>
                                                    <option value="YE">Yemen</option>
                                                    <option value="ZM">Zambia</option>
                                                    <option value="ZW">Zimbabwe</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="url">Ảnh thẻ:</label>
                                                {/* <img id="logo-icon" className="imgPreview" src="" /> */}
                                                <input
                                                    type="hidden"
                                                    name="image"
                                                    id="image"
                                                    className="inputImg"
                                                    defaultValue
                                                />
                                                <div style={{ marginLeft: 15 }}>
                                                    <button type="button" className="btn btn-info">
                                                        Chọn ảnh
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="status" style={{ width: '100%' }}>
                                                    Trạng thái:
                                                </label>
                                                <input
                                                    name="status"
                                                    id="status"
                                                    type="checkbox"
                                                    defaultValue={1}
                                                    data-toggle="toggle"
                                                    style={{ display: 'none' }}
                                                    defaultChecked="checked"
                                                />
                                                <div
                                                    data-table="softcard_products"
                                                    data-id={46}
                                                    data-col="status"
                                                    className={
                                                        status
                                                            ? cx('switch', 'round', 'on')
                                                            : cx('switch', 'round', 'off')
                                                    }
                                                    style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                    onClick={() => handleToggleStatus()}
                                                >
                                                    <div className={cx('toggle')} />
                                                </div>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="short_description">Mô tả ngắn:</label>
                                                <textarea
                                                    name="short_description"
                                                    id="short_description"
                                                    className="form-control"
                                                    rows={5}
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="description">Mô tả:</label>
                                                <Editor />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label>Sắp xếp:</label>
                                                <input
                                                    name="sort"
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={0}
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <fieldset className="border p-3">
                                                    <legend className="w-auto" style={{ fontSize: 24 }}>
                                                        SEO ONPAGE
                                                    </legend>
                                                    <label htmlFor="sort">Tiêu đề SEO:</label>
                                                    <input name="meta[title]" type="text" className="form-control" />
                                                    <label htmlFor="sort">Mô tả SEO:</label>
                                                    <textarea
                                                        name="meta[description]"
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue={''}
                                                    />
                                                    <label htmlFor="sort">Từ khóa SEO:</label>
                                                    <input name="meta[keyword]" type="text" className="form-control" />
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer" style={{ borderTop: 0 }}>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
